import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../index.css";
import axios from "axios";
import { PageUiActions } from "../../Store/uiSlice";
import { BrowserRouter, Route, useHistory, Switch } from "react-router-dom";
import { BASE_URL_GITHUB_API } from "../../Utils/BaseURL";
import TopProfileSection from "../TopProfileSec/TopProfileSection";
import RepoSection from "../Repos/Repos";

const MainProfile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [test, settest] = useState(false);
  const [data, setData] = useState({});
  const Name = useSelector((state) => state.ui.Name);
  const GithubProfile = useSelector((state) => state.ui.GithubProfile);

  useEffect(() => {
    setTimeout(() => {
      settest(true);
    }, 0);
  });

  return (
    <div
      className={
        !test ? "MainBodyColor" : "MainBodyColor MainBodyColoranimation"
      }
    >
      <TopProfileSection className="MainBodyTopSection" />
      <RepoSection />
    </div>
  );
};
export default MainProfile;
