import ReactPaginate from "react-paginate";
import "../index.css";
import { PageUiActions } from "../../Store/uiSlice";
import { useSelector, useDispatch } from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();
  const GithubTotalRepos = useSelector((state) => state.ui.GithubTotalRepos);
  const GithubTotalPages = useSelector((state) => state.ui.GithubTotalPages);

  const handlePageClick = (data) => {
    dispatch(
      PageUiActions.changeGithubTotalRepos({
        GithubCurrentPage: data.selected + 1 < 1 ? 1 : data.selected + 1,
      })
    );
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
    dispatch(
      PageUiActions.changeGithubTotalRepos({
        GithubPerPage:
          e.target.value < 1
            ? 1
            : e.target.value > GithubTotalRepos && e.target.value > 100
            ? 100
            : e.target.value > GithubTotalRepos && e.target.value < 100
            ? GithubTotalRepos
            : e.target.value,
      })
    );
  };

  return (
    <div className="PAGINATIONComponentDiv">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={GithubTotalPages}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
      <input
        type="Text"
        placeholder="10"
        className="PAGINATIONInputBox"
        onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
      />
    </div>
  );
};
export default Pagination;
