import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HappySun from "../images/happy-sun.png";

const ReactionGame = () => {
  const [showImage, setShowImage] = useState(false);
  const [startTime, setStartTime] = useState(0);

  let min = 3000; //3 sec
  let max = 10000; //10 sec
  let rand = Math.floor(Math.random() * (max - min + 1000) + min);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(true);
      let dx = new Date();
      let startTime = dx.getTime();
      setStartTime(startTime);
    }, rand);
  }, []);

  function stopTimer() {
    let d = new Date();
    let end = d.getTime();
    let reactionTime = (end - startTime) / 1000;
    console.log(reactionTime);
    localStorage.setItem("reactionTime", reactionTime);
  }

  let button = <button>Click</button>;
  if (showImage) {
    button = (
      <Link to="/results">
        <button onClick={stopTimer}>Click</button>
      </Link>
    );
  }

  return (
    <div className="reaction-game-wrapper">
      <h3>Reaction game</h3>
      <div className="reaction-game-image">
        {showImage ? (
          <img
            id="testbild"
            src={HappySun}
            width="300"
            height="300"
            alt="a very happy sun"
          ></img>
        ) : null}
      </div>
      <p>Wait for the picture</p>
      {button}
    </div>
  );
};

export default ReactionGame;
