import { useEffect, useState } from "react";
import { PageUiActions } from "../../Store/uiSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "../index.css";

const SearchBox = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setstate] = useState("");
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
      <div className="SEARCHBOXPAGEtitlre">
        <Typewriter
        
          options={{
            strings: ["Github", "Github Profile", "Github Profile Finder"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className={toggle ? "search-wrapper active" : "search-wrapper"}>
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
            //     searchToggle(true);
            //   }
            // }}
          />
          <button
            className="search-icon"
            data-testid="search-button"
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
          data-testid="close-button"
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
