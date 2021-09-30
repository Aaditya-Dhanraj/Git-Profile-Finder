import { useEffect, useState } from "react";
import "../index.css";
import TopProfileSection from "../TopProfileSec/TopProfileSection";
import RepoSection from "../Repos/Repos";
import Pagination from "../Pagination/Pagination";
import RepoSearch from "../RepoSearch/RepoSearch";

const MainProfile = () => {
  const [test, settest] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      settest(true);
    }, 0);
  });

  return (
    <div>
      <RepoSearch />
      
      <div
        className={
          !test ? "MainBodyColor" : "MainBodyColor MainBodyColoranimation"
        }
      >
        <TopProfileSection className="MainBodyTopSection" />
        <RepoSection />
        <Pagination />
      </div>
    </div>
  );
};
export default MainProfile;
