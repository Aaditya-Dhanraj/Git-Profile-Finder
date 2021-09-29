import { useEffect, useState } from "react";
import { PageUiActions } from "./Store/uiSlice";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { BrowserRouter, Route, useHistory, Switch } from "react-router-dom";
import MainProfile from "./Components/MainProfile/MainProfile";
import SearchBox from "./Components/SearchBox/SearchBox";
import Pagination from "./Components/Pagination/Pagination";
import Error from "./Components/ERROR/Error404";
const Routing = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/searchPage");
  });

  return (
    <Switch>
      <Route exact path="/searchPage">
        <SearchBox />
      </Route>
      <Route exact path="/DetailsPage">
        <MainProfile />
      </Route>
      <Route exact path="/ERROR404">
        <Error />
      </Route>
      <Route path="*">Not Found</Route>
    </Switch>
  );
};

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
