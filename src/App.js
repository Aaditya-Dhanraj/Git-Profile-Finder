import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, useHistory, Switch } from "react-router-dom";
import MainProfile from "./Components/MainProfile/MainProfile";
import SearchBox from "./Components/SearchBox/SearchBox";
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
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
