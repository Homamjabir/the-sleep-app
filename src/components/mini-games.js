import React from "react";
import { Link } from "react-router-dom";
import ReturnIcon from "../images/return-icon.jpg";
import "./css/minigames.css";

const Mini_games = () => {
  return (
    <div className="minigames-flex-wrapper">
      <Link to="/menu" className="returnIcon">
        <img src={ReturnIcon} alt="test" width="20" height="20"></img>
      </Link>
      <h3>Reaction game</h3>
      <div className="reaction-game-info-text">
        <p>After you click start below a reaction test will start</p>
        <br />
        <p>
          When a picture appears on the next page, click on the button as fast
          as you can.
        </p>
      </div>

      
      

      <Link to="/reactiongame" className="button-wrapper-link">
        <button className="minigame-button">Start</button>
      </Link>
    </div>
  );
};

export default Mini_games;
