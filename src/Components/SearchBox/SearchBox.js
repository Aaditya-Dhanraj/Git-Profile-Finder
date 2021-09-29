import { useEffect, useState } from "react";
import { PageUiActions } from "../../Store/uiSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "../index.css";

const SearchBox = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setstate] = useState("Aaditya-Dhanraj");
  const [toggle, settoggle] = useState(false);
  const [toggle2, settoggle2] = useState(false);
  const handleChange = (e) => {
    setstate(e.target.value);
  };
  const searchToggle = (val) => {
    settoggle(val);
  };
  const Profile = useSelector((state) => state.ui.Profile);

  useEffect(() => {
    if (Profile) {
      setTimeout(() => {
        history.push("/DetailsPage");
      }, 800);
      settoggle(false);

    }
  }, [Profile]);

  return (
    <div className={!toggle2 ? "searchBody" : "searchBody hide"}>
      <span className="SEARCHBOXPAGEtitlre">Github Profile Finder</span>
      <div className={toggle ? "search-wrapper active" : "search-wrapper"}>
        <div className="input-holder">
          <input
            type="text"
            defaultValue={state}
            className="search-input"
            placeholder="Type to search"
            onChange={handleChange}
          />
          <button
            className="search-icon"
            onClick={() => {
              if (toggle && state !== "") {
                dispatch(
                  PageUiActions.changeName({ Name: state, Profile: true })
                );
                settoggle2(true);
              }
              searchToggle(true);
            }}
          >
            <span></span>
          </button>
        </div>
        <span
          className="close"
          onClick={() => {
            searchToggle(false);
            settoggle2(false);
          }}
        ></span>
      </div>
    </div>
  );
};
export default SearchBox;
