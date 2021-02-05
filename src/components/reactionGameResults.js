import React from "react";
import { Link } from "react-router-dom";

const ReactionGameResults = () => {
  return (
    <div className="reaction-game-result-wrapper">
      <h3>Your speed was {localStorage.getItem("reactionTime")} seconds</h3>
      <div className="reaction-game-info-text">
        <p>Check back in 4 hours for another test</p>
        <br />
        <p>03:59:59</p>
      </div>

      <Link to="/menu">
        <button>Menu</button>
      </Link>
    </div>
  );
};

export default ReactionGameResults;
