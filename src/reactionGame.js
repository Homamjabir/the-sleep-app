import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import HappySun from "./images/happy-sun.png";

/*function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}*/

const ReactionGame = () => {
  const [showImage, setShowImage] = useState(false);
  //const [playedOnce, setPlayedOnce] = useState(false);
  //const [seconds, setSeconds] = useState(0);

  let min = 3000; //3 sec
  let max = 10000; //10 sec
  let rand = Math.floor(Math.random() * (max - min + 1000) + min); //min + (Math.random() * max - min);

  useEffect(() => {
    setTimeout(() => {
      console.log("Rand: " + rand);
      setShowImage(true);
    }, rand);
  }, []);

  let buttonxd = <button>Click</button>;
  if (showImage) {
    buttonxd = (
      <Link to="/reactiongameresults">
        <button>Click</button>
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
      {buttonxd}
    </div>
  );
};

export default ReactionGame;
