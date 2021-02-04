import React from "react";
import { Link } from "react-router-dom";
import Icon from "./images/return-icon.jpg";

const ReactGameInfo = () => {
  return (
    <div className="reaction-game-info-wrapper">
      <h3>Reaction game</h3>
      <Link to="/menu">
        <img src={Icon} alt="test" width="20" height="20"></img>
      </Link>
      <div className="reaction-game-info-text">
        <p>After you click start below a reaction test will start</p>
        <br />
        <p>
          When a picture appears on the next page, click on the button as fast
          as you can.
        </p>
      </div>

      <Link to="/reactiongame">
        <button>Start</button>
      </Link>
    </div>
  );
};

export default ReactGameInfo;
