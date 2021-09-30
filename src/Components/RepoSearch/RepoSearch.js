import { useEffect, useState } from "react";
import { PageUiActions } from "../../Store/uiSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import backIcon from "../../Downloadable/back.png";
import "../index.css";

const RepoSearch = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setstate] = useState("");
  const [toggle, settoggle] = useState(false);

  const handleChange = (e) => {
    setstate(e.target.value);
    if (e.target.value === "") {
      dispatch(
        PageUiActions.changeSearch({
          SearchRepo: state,
        })
      );
    }
  };

  const backButtonHandle = () => {
    window.location.reload();
  };

  return (
    <div className="RepoSearchMain">
      <div className={toggle ? "search-wrapper2 active" : "search-wrapper2"}>
        <div className="input-holder">
          <input
            type="text"
            defaultValue={state}
            className="search-input"
            placeholder="Type to search"
            onChange={handleChange}
            // onKeyPress={(e) => {
            //   if (e.key === "Enter") {
            //     if (toggle && state !== "") {
            //       dispatch(
            //         PageUiActions.changeName({ Name: state, Profile: true })
            //       );
            //       settoggle2(true);
            //     }
            //     settoggle(true);
            //   }
            // }}
          />
          <button
            className="search-icon"
            data-testid="search-button"
            onClick={() => {
              if (toggle && state !== "") {
                dispatch(PageUiActions.changeSearch({ SearchRepo: state }));
                console.log(state);
              }
              settoggle(true);
            }}
          >
            <span></span>
          </button>
        </div>
        <span
          className="close"
          data-testid="close-button"
          onClick={() => {
            settoggle(false);
          }}
        ></span>
      </div>
      <img
        onClick={backButtonHandle}
        className="RepoSearchCloseButton"
        alt="#img"
        src={backIcon}
      />
    </div>
  );
};
export default RepoSearch;
