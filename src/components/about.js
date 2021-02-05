import React, { Component } from "react";
import {Route, Link} from "react-router-dom";
import "./css/settings.css"
import ReturnIcon from "../images/return-icon.jpg";

const About = () => {


      return (
        <div className = "AboutContainer">
          <Link to="/settings">
            <img src={ReturnIcon} alt="test" width="20" height="20"></img>
          </Link>

          
          <h2>About</h2>

          <p>This app is a tool to help aid Karolinska Institutet
              in their study about sleep patterns and its effects, <br></br>
              by gathering data from study participants.<br></br>
              <br></br>
              Your participation will contribute to<br></br>
              researchers gaining more knowledge about<br></br>
              sleep patterns, and in turn becoming more able<br></br>
              to help people live more productive and fulfilling lives.
          </p>

          <div className="menuButtons1">
            <Route render={({ history}) => (
              <button type="button" onClick={() => { history.push('/menu') }}>
                Menu
              </button>
            )} />
          </div>
    </div>

  );
}


export default About;
