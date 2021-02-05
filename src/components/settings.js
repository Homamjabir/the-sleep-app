import React, { Component } from "react";
import {Route} from "react-router-dom";
import "./css/menu.css"

class Settings extends Component {
    render() {
      return (
        <div className = "SettingsContainer">
            <h1>Settings</h1>

            
            <div className = "menuButtons">

            <Route render={({ history}) => (
              <button type="button" onClick={() => { history.push('/about') }}>
                About the App
              </button>
            )} />
              </div>
        </div>
      );
    }
  }

export default Settings;
