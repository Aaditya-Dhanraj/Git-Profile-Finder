import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { PageUiActions } from "../../Store/uiSlice";
import "../index.css";

const Error = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ErroeMessage = useSelector((state) => state.ui.ErroeMessage);

  useEffect(() => {
    setTimeout(() => {
      history.push("/searchPage");
    }, 2000);

    dispatch(
      PageUiActions.changeName({
        Name: "",
        Profile: false,
      })
    );
  });
  return (
    <div style={{ paddingTop: "10px" }} className="searchBody">
      <h1 style={{ color: "white" }}>{ErroeMessage}</h1>
    </div>
  );
};
export default Error;
