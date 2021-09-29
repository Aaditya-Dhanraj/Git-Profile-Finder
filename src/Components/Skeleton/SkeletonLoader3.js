import "../index.css";

const SkeletonLoader3 = (props) => {
  return (
    <div className="RepoPageCardComponent">
      <div className="cardsLayout ">
        <span className="topProfileCardNames skeleton-text skeleton"> </span>
        <span style={{width:"90%"}} className="topProfileCardNames scrollbar-hidden skeleton-text skeleton"></span>
        <span style={{width:"100%"}} className="topProfileCardNames scrollbar-hidden skeleton-text skeleton"></span>
        <span style={{width:"90%"}} className="topProfileCardNames scrollbar-hidden skeleton-text skeleton"></span>
        <span style={{width:"80%"}} className="topProfileCardNames scrollbar-hidden skeleton-text skeleton"></span>
        <div className="topProfileCardTagsMainDiv">
          <div className="topProfileCardTags skeleton">Loading</div>
          <div className="topProfileCardTags skeleton">Loading</div>
          <div className="topProfileCardTags skeleton">Loading</div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonLoader3;
