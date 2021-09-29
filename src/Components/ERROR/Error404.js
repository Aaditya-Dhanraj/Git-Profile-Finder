import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { PageUiActions } from "../../Store/uiSlice";
import "../index.css";

const Error = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      history.push("/searchPage");
    }, 1000);

    dispatch(
      PageUiActions.changeName({
        Name: "",
      })
    );
  });
  return (
    <div style={{ paddingTop: "10px" }} className="searchBody">
      <h1 style={{ color: "white" }}>Error : Something went wrong!!!</h1>
    </div>
  );
};
export default Error;
