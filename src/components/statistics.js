import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReturnIcon from "../images/return-icon.jpg";

const Statistics = () => {
  return (
    <div className="statisticsContainer">
      <Link to="/menu">
        <img src={ReturnIcon} alt="test" width="20" height="20"></img>
      </Link>
      <h2>Statistics</h2>
    </div>
  );
};

export default Statistics;
