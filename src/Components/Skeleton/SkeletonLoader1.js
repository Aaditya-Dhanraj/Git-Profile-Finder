import map from "../../Downloadable/map.svg";
import link from "../../Downloadable/link.svg";

const SkeletonLoader1 = () => {
  return (
    <div>
      <div className="topProfileSecMainBodyTop">
        <div className="topProfileSecMainBody">
          <div className="topProfileAvatarImgDiv">
            <div
              className="topProfileAvatarImg skeleton"
              style={{ marginLeft: "25px" }}
            ></div>
          </div>
          <div className="topProfileIntroSection">
            <span className="topProfileName skeleton skeleton-text"> </span>
            <span style={{width:"80%"}} className="topProfileBio  skeleton skeleton-text"> </span>
            <span style={{width:"80%"}} className="topProfileBio  skeleton skeleton-text"> </span>
            <span className="topProfileBio  skeleton skeleton-text"> </span>
            <span  className="topProfileBio  skeleton skeleton-text">
              <div className="Invisible">Twitter : This is twitter text</div>{" "}
            </span>
          </div>
        </div>
        <div className="topProfileGithubDiv">
          <img className="topProfileIcon2" src={link} alt="#img" />
          <span className="topProfileBio  skeleton skeleton-text"></span>
        </div>
      </div>
    </div>
  );
};
export default SkeletonLoader1;
