import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReactionGameResults = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={index}>
        {("0" + timeLeft[interval]).slice(-2)}
        {index !== 2 ? ":" : ""}
      </span>
    );
  });

  return (
    <div className="reaction-game-result-wrapper">
      <h3>Your speed was {localStorage.getItem("reactionTime")} seconds</h3>
      <div className="reaction-game-info-text">
        <p>Check back in 4 hours for another test</p>
        <br />
        <div>
          {timerComponents.length ? (
            timerComponents
          ) : (
            <span>Time for a new test!</span>
          )}
        </div>
      </div>

      <Link to="/menu">
        <button>Menu</button>
      </Link>
    </div>
  );
};

const calculateTimeLeft = () => {
  let time = new Date();
  time.setHours(time.getHours() + 3, 59, 59);
  localStorage.setItem("startTime", JSON.stringify(time));
  let difference = time - new Date();

  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default ReactionGameResults;
