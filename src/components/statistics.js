import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReturnIcon from "../images/return-icon.jpg";

const Statistics = () => {
  return (
    <div className="statisticsContainer">
      <Link to="/menu" className="returnIcon">
        <img src={ReturnIcon} alt="test" width="20" height="20"></img>
      </Link>
      <p>Your statistics compared to other participants</p>
    </div>
  );
};

export default Statistics;
