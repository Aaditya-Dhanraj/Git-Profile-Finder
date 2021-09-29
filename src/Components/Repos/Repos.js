import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../index.css";
import axios from "axios";
import { PageUiActions } from "../../Store/uiSlice";
import { useHistory } from "react-router-dom";
import { BASE_URL_GITHUB_API } from "../../Utils/BaseURL";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import SkeletonLoader2 from "../Skeleton/SkeletonLoader2";

const RepoSection = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const Name = useSelector((state) => state.ui.Name);
  const GithubPerPage = useSelector((state) => state.ui.GithubPerPage);
  const GithubTotalRepos = useSelector((state) => state.ui.GithubTotalRepos);
  const GithubCurrentPage = useSelector((state) => state.ui.GithubCurrentPage);
  const GithubPreviousPage = useSelector(
    (state) => state.ui.GithubPreviousPage
  );
  const GithubPrevPerPage = useSelector((state) => state.ui.GithubPrevPerPage);
  useEffect(() => {
    if (GithubPreviousPage !== GithubCurrentPage) {
      setData([]);
      dispatch(
        PageUiActions.changeGithubTotalRepos({
          GithubPreviousPage: GithubCurrentPage,
        })
      );
      getProfileData();
    }
    if (GithubPrevPerPage !== GithubPerPage) {
      setData([]);
      dispatch(
        PageUiActions.changeGithubTotalRepos({
          GithubPrevPerPage: GithubPerPage,
          GithubTotalPages: Math.ceil(GithubTotalRepos / GithubPerPage),
        })
      );
      getProfileData();
    }
    if (data.length === 0) {
      getProfileData();
    }
    console.log(data, "in Useeffect repos");
  }, [data, GithubCurrentPage, GithubPerPage, GithubTotalRepos]);

  const getProfileData = () => {
    axios
      .get(
        `${BASE_URL_GITHUB_API}/users/${Name}/repos?per_page=${GithubPerPage}&page=${GithubCurrentPage}`
      )
      .then((res) => {
        // console.log(res, "this is data");
        let response = res.data;
        if (res.status === 200) {
          setData(response);
          console.log("inside fetch");
        } else if (res.status === 404) {
          // console.log("Hello3");
          history.push("/ERROR404");
        }
      })
      .catch((err) => {
        // setDataPopulated(true);
        if (err.status === 404) {
          // console.log("Hello1");
          history.push("/ERROR404");
        } else {
          // dispatch(PageUiActions.changeName({ Name: "", Profile: false }));
          // history.push("/searchPage");
          history.push("/ERROR404");
        }

        // console.log(err);
      });
  };

  return (
    <div className="ReposPageMainDiv">
      {data.length > 0 ? (
        <div className="RepoPageCardComponentDiv">
          {data.map((el, key) => (
            <Cards
              name={el.name}
              description={el.description}
              language={el.languages_url}
            />
          ))}
        </div>
      ) : (
        <SkeletonLoader2 />
      )}
      <Pagination />
    </div>
  );
};
export default RepoSection;
