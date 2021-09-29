import "../index.css";
import SkeletonLoader3 from "./SkeletonLoader3";

const repos = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const SkeletonLoader2 = () => {
  return (
    <div className="ReposPageMainDiv">
      <div className="RepoPageCardComponentDiv">
        {repos.map((el, key) => (
          <SkeletonLoader3 />
        ))}
      </div>
    </div>
  );
};
export default SkeletonLoader2;
