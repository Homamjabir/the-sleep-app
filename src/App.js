import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import "./App.css";
import ReactionGameInfo from "./reactionGameInfo.js";
import ReactionGame from "./reactionGame.js";
import ReactionGameResults from "./reactionGameResults.js";
import Menu from "./components/menu.js";
import Questionnaire from "./components/questionnaire.js";
import Settings from "./components/settings.js";
import Statistics from "./components/statistics.js";
import Mini_games from "./components/mini-games.js";
import Auth from "./components/loginReg.js/auth.js";

const App = () => {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Auth />
            </Route>
            <Route path="/reactiongameinfo">
              <ReactionGameInfo />
            </Route>
            <Route path="/reactiongame">
              <ReactionGame />
            </Route>
            <Route path="/reactiongameresults">
              <ReactionGameResults />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/questionnaire">
              <Questionnaire />
            </Route>
            <Route path="*">
              <h1>Invalid URL</h1>
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/mini-games">
              <Mini_games />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
