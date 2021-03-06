import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../index.css";
import axios from "axios";
import map from "../../Downloadable/map.svg";
import link from "../../Downloadable/link.svg";
import Profile from "../../Downloadable/profile.png";
import { PageUiActions } from "../../Store/uiSlice";
import { useHistory } from "react-router-dom";
import { BASE_URL_GITHUB_API } from "../../Utils/BaseURL";
import SkeletonLoader1 from "../Skeleton/SkeletonLoader1";

const TopProfileSection = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const Name = useSelector((state) => state.ui.Name);
  const GithubPerPage = useSelector((state) => state.ui.GithubPerPage);

  useEffect(() => {
    if (!data.name) {
      getProfileData();
    }
    console.log(data, "in Useeffect");
  });

  const getProfileData = () => {
    axios
      .get(`${BASE_URL_GITHUB_API}/users/${Name}`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
        },
      })
      .then((res) => {
        console.log(res.status, "this is data");
        let response = res.data;
        if (res.status === 200) {
          setData(response);
          dispatch(
            PageUiActions.changeGithubTotalRepos({
              GithubTotalRepos: response.public_repos,
              GithubTotalPages: Math.ceil(
                response.public_repos / GithubPerPage
              ),
            })
          );
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
        // console.log(err.request.err.response, "this is data from err");
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
    <div>
      {data.name ? (
        <div className="topProfileSecMainBodyTop">
          <div className="topProfileSecMainBody">
            <div className="topProfileAvatarImgDiv">
              <img
                alt="#img"
                className={
                  data.avatar_url
                    ? "topProfileAvatarImg"
                    : "topProfileAvatarImg skeleton"
                }
                src={
                  data.avatar_url
                    ? data.avatar_url
                    : data.avatar_url === ""
                    ? Profile
                    : null
                }
              />
            </div>
            <div className="topProfileIntroSection">
              <span data-testid="name" className="topProfileName">
                {" "}
                {data.name ? data.name : "Name Not Available"}
              </span>
              <span className="topProfileBio">
                {" "}
                {data.bio ? data.bio : "No Bio Available"}
              </span>
              <div className="topProfileLocationDiv">
                <img alt="#img" className="topProfileIcon" src={map} />
                <span className="topProfileBio">
                  {" "}
                  {data.location ? data.location : "Not Available"}
                </span>
              </div>
              <span className="topProfileBio">
                {" "}
                Twitter :&nbsp;
                {data.twitter_username ? data.twitter_username : "Not found"}
              </span>
            </div>
          </div>
          <div className="topProfileGithubDiv">
            <img alt="#img" className="topProfileIcon2" src={link} />
            <span className="topProfileBio">
              {data.html_url ? data.html_url : "Not Available"}
            </span>
          </div>
        </div>
      ) : (
        <SkeletonLoader1 />
      )}
    </div>
  );
};
export default TopProfileSection;
