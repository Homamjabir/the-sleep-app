import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ReturnIcon from "./images/return-icon.jpg";
import HappySun from "./images/happy-sun.png";
import { render } from "@testing-library/react";

function useInterval(callback, delay) {
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
}

const ReactionGame = () => {
  let imgShowing = false;
  let min = 3000;
  let max = 10000;
  let rand = min + (Math.random() * max - min);
  console.log("Rand: " + rand);

  useInterval(showPic, rand);

  console.log(rand);

  return (
    <div className="reaction-game-wrapper">
      <img src={ReturnIcon} alt="test" width="20" height="20"></img>
      <h3>Reaction game</h3>
      <div className="reaction-game-image">
        <img id="testbild" src=""></img>
      </div>
      <p>Wait for the picture</p>
      <button onClick={redirect(imgShowing)}>Click</button>
    </div>
  );
};

function showPic() {
  let img = document.getElementById("testbild");
  img.src = HappySun;
  img.width = "300";
  img.height = "300";
}

function redirect(imgShowing) {
  if (imgShowing) {
    //redirect to next page
  } else {
    //retry the same page
  }
}

export default ReactionGame;
