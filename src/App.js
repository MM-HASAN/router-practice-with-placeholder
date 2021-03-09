import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FriendDetails from "./FriendDetails/FriendDetails";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
