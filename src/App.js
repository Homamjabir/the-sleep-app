import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import "./App.css";
import ReactionGameInfo from "./reactionGameInfo.js";
import ReactionGame from "./reactionGame.js";

const App = () => {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <h1>Login page</h1>
            </Route>
            <Route path="/reactgameinfo">
              <ReactionGameInfo />
            </Route>
            <Route path="/reactiongame">
              <ReactionGame />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
