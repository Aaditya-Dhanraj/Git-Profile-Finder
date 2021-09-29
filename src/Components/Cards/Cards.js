import "../index.css";
import axios from "axios";
import { PageUiActions } from "../../Store/uiSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, useHistory, Switch } from "react-router-dom";

const Cards = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [data, setdata] = useState();

  useEffect(() => {
    if (data === undefined) {
      getlanguages();
    }
    console.log(data, "this is languages");
  }, [data]);

  const getlanguages = () => {
    axios
      .get(`${props.language}`, {})
      .then((res) => {
        console.log(res, "this is data");
        let response = res.data;
        if (res.status == 200) {
          setdata(response);
          //   console.log("inside fetch");
        } else if (res.status === 404) {
          //   console.log("Hello3");
          history.push("/ERROR404");
        } else if (res.status === 403) {
          //   console.log("Hello3");
          // dispatch(PageUiActions.changeName({ Name: "", Profile: false }));
          // history.push("/searchPage");
          history.push("/ERROR404");
        }
      })
      .catch((err) => {
        // setDataPopulated(true);
        if (err.status === 404) {
          //   console.log("Hello1");
          history.push("/ERROR404");
        } else {
          console.log("Hello2");

          // dispatch(PageUiActions.changeName({ Name: "", Profile: false }));
          // history.push("/searchPage");
          history.push("/ERROR404");
        }

        // console.log(err);
      });
  };
  return (
    <div className="RepoPageCardComponent">
      <div className="cardsLayout">
        <span className="topProfileCardNames">
          {props.name ? props.name : "Not available"}
        </span>
        <span className="topProfileCardDescp scrollbar-hidden">
          {props.description
            ? props.description
            : "No description Available...."}
        </span>
        <div className="topProfileCardTagsMainDiv">
          {!data || data == null || data == undefined || data == {} ? (
            <div className="topProfileCardTags">NotAvailable</div>
          ) : (
            Object.keys(data).map((el, idx) => (
              <div className="topProfileCardTags">{el}</div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Cards;

// {Object.fromEntries(
//     Object.entries(data).map(([k, v]) =>
//       console.log(k, v, "this is inner map")
//     )
//   )}
