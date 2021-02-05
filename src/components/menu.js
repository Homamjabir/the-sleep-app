import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./css/menu.css";

const Menu = () => {
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
     } );

  return (
    <div className="menuContainer">
      <h3>Main Menu</h3>
      <div>
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>Time for a new test!</span>
        )}
      </div>
      <div className="menuButtons">
          <Link to='/questionnaire'>
            <button type="button" >Questionnaire</button>
          </Link>

          <Link to='/mini-games'>
            <button type="button" >Mini-games</button>
          </Link>

          <Link to='/statistics'>
            <button type="button" >Statistics</button>
          </Link>

          <Link to='/settings'>
            <button type="button" >Settings</button>
          </Link>
      </div>
    </div>
  );
};

const calculateTimeLeft = () => {
  let time = new Date(JSON.parse(localStorage.getItem("startTime")));
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

export default Menu;

