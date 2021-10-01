import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../index.css";
import axios from "axios";
import { PageUiActions } from "../../Store/uiSlice";
import { useHistory } from "react-router-dom";
import { BASE_URL_GITHUB_API } from "../../Utils/BaseURL";
import Cards from "../Cards/Cards";
import SkeletonLoader2 from "../Skeleton/SkeletonLoader2";

const RepoSection = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // const [search, setSearch] = useState(true);
  // const [bool, setBool] = useState(false);
  const Name = useSelector((state) => state.ui.Name);
  const GithubPerPage = useSelector((state) => state.ui.GithubPerPage);
  const GithubTotalRepos = useSelector((state) => state.ui.GithubTotalRepos);
  const GithubCurrentPage = useSelector((state) => state.ui.GithubCurrentPage);
  const GithubPreviousPage = useSelector(
    (state) => state.ui.GithubPreviousPage
  );
  const GithubPrevPerPage = useSelector((state) => state.ui.GithubPrevPerPage);
  const SearchRepo = useSelector((state) => state.ui.SearchRepo);
  const SearchRepoPrev = useSelector((state) => state.ui.SearchRepoPrev);

  useEffect(() => {
    if (GithubPreviousPage !== GithubCurrentPage) {
      // setSearch(true);
      setData([]);
      dispatch(
        PageUiActions.changeGithubTotalRepos({
          GithubPreviousPage: GithubCurrentPage,
        })
      );
      getProfileData();
    }
    if (GithubPrevPerPage !== GithubPerPage) {
      // setSearch(true);
      setData([]);
      dispatch(
        PageUiActions.changeGithubTotalRepos({
          GithubPrevPerPage: GithubPerPage,
          GithubTotalPages: Math.ceil(GithubTotalRepos / GithubPerPage),
        })
      );
      getProfileData();
    }
    if (SearchRepoPrev !== SearchRepo) {
      // setSearch(true);
      dispatch(
        PageUiActions.changeGithubTotalRepos({
          GithubPerPage: GithubTotalRepos,
          GithubTotalPages: 1,
        })
      );
      setData([]);
      dispatch(
        PageUiActions.changeSearch({
          SearchRepoPrev: SearchRepo,
        })
      );
      getProfileData();
    }
    if (data.length === 0) {
      getProfileData();
    }
    // console.log(data, "in Useeffect repos");
  }, [data, GithubCurrentPage, GithubPerPage, GithubTotalRepos, SearchRepo]);

  const getProfileData = () => {
    axios
      .get(
        `${BASE_URL_GITHUB_API}/users/${Name}/repos?per_page=${GithubPerPage}&page=${GithubCurrentPage}`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
          },
        }
      )
      .then((res) => {
        // console.log(res, "this is data");
        let response;
        if (SearchRepo !== "" && res.data.length > 0) {
          response = res.data.filter((el, key) => {
            // console.log(el.name.toLowerCase().includes(`${SearchRepo.toLowerCase()}`);
            // console.log(el.name.toLowerCase(), SearchRepo.toLowerCase());
            return el.name
              .toLowerCase()
              .includes(`${SearchRepo.toLowerCase()}`);
          });
          if (response.length === 0) {
            // setSearch(false);
            dispatch(
              PageUiActions.changeErrorMsg({
                ErroeMessage: "No repo Found !",
              })
            );
            setTimeout(() => {
              history.push("/ERROR404");
            }, 500);
          }
        } else {
          response = res.data;
          if (res.data.length === 0) {
            // setSearch(false);
            dispatch(
              PageUiActions.changeErrorMsg({
                ErroeMessage: "No repo Found !",
              })
            );
            setTimeout(() => {
              history.push("/ERROR404");
            }, 500);
            // setSearch(true);
          }
        }
        if (res.status === 200) {
          setData(response);
          console.log("inside fetch");
        } else if (res.status === 404) {
          // console.log("Hello3");
          dispatch(
            PageUiActions.changeErrorMsg({
              ErroeMessage: "404 Not Found",
            })
          );
          history.push("/ERROR404");
        } else if (res.status === 403) {
          // dispatch(PageUiActions.changeName({ Name: "", Profile: false }));
          // history.push("/searchPage");
          dispatch(
            PageUiActions.changeErrorMsg({
              ErroeMessage: "API Request Limit Exeeded",
            })
          );
          history.push("/ERROR404");
        } else {
          // dispatch(PageUiActions.changeName({ Name: "", Profile: false }));
          // history.push("/searchPage");
          dispatch(
            PageUiActions.changeErrorMsg({
              ErroeMessage: "Something Went Wrong !!!",
            })
          );
          history.push("/ERROR404");
        }
      })
      .catch((err) => {
        // setDataPopulated(true);
        if (err.request.status === "") {
          dispatch(
            PageUiActions.changeErrorMsg({
              ErroeMessage: "Device Offline !!!",
            })
          );
          history.push("/ERROR404");
        } else if (err.response.status === 404) {
          // console.log("Hello1");
          dispatch(
            PageUiActions.changeErrorMsg({
              ErroeMessage: "404 Not Found",
            })
          );
          history.push("/ERROR404");
        } else if (err.response.status === 403) {
          // dispatch(PageUiActions.changeName({ Name: "", Profile: false }));
          // history.push("/searchPage");
          dispatch(
            PageUiActions.changeErrorMsg({
              ErroeMessage: "API Request Limit Exeeded",
            })
          );
          history.push("/ERROR404");
        } else {
          // dispatch(PageUiActions.changeName({ Name: "", Profile: false }));
          // history.push("/searchPage");
          dispatch(
            PageUiActions.changeErrorMsg({
              ErroeMessage: "Something Went Wrong !!!",
            })
          );
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
        <div>
          <SkeletonLoader2 />
        </div>
      )}
    </div>
  );
};
export default RepoSection;
