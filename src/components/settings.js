import React, { useState } from "react";
import {Route, Link} from "react-router-dom";
import "./css/settings.css"
import Switch from 'react-input-switch';
import ReturnIcon from "../images/return-icon.jpg";



const Settings = () => {
    const [value, setValue] = useState(0);
      return (
        <div className = "SettingsContainer">
        <Link to="/menu">
          <img src={ReturnIcon} alt="test" width="20" height="20"></img>
        </Link>
            <h2>Settings</h2>

            <div className = "notif" >

            <p>Notifications during work hours</p>

            </div>
            <div className = "switch" >
            <Switch value={value} onChange={setValue} />
            </div>

            <div className = "menuButtons">

            <Route render={({ history}) => (
              <button type="button" onClick={() => { history.push('/') }}>
                Log Out
              </button>
              )} />

            <Route render={({ history}) => (
              <button type="button" onClick={() => { history.push('/about') }}>
                About the App
              </button>
            )} />
              </div>
        </div>
      );

  }

export default Settings;
