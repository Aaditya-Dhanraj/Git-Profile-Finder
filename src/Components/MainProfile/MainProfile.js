import { useEffect, useState } from "react";
import "../index.css";
import TopProfileSection from "../TopProfileSec/TopProfileSection";
import RepoSection from "../Repos/Repos";

const MainProfile = () => {
  const [test, settest] = useState(false);

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
