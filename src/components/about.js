import React, { Component } from "react";
import {Route} from "react-router-dom";
import "./css/menu.css"

class About extends Component {
    render() {
      return (
        <div className = "SettingsContainer">
            <h1>About</h1>

            <h3>This app is a tool to help aid Karolinska Institutet<br></br>
             in their study about sleep patterns and its effects, <br></br>by gathering data from study participants.<br></br>
               <br></br>
               Your participation will contribute to<br></br>
                 researchers gaining more knowledge about<br></br>
                 sleep patterns, and in turn becoming more able<br></br>
                  to help people live more productive and fulfilling lives.
            </h3>
            <div className = "menuButtons">

            <Route render={({ history}) => (
              <button type="button" onClick={() => { history.push('/menu') }}>
                Homepage
              </button>
            )} />
              </div>
        </div>
      );
    }
  }

export default About;
