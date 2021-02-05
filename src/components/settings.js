import React, { useState } from "react";
import {Route} from "react-router-dom";
import "./css/settings.css"
import Switch from 'react-input-switch';



const Settings = () => {
    const [value, setValue] = useState(0);
      return (
        <div className = "SettingsContainer">
            <h2>Settings</h2>

            <div className = "notif" >

            <p>Notifications during work hours</p>

            </div>
            <div className = "switch" >
            <Switch value={value} onChange={setValue} />
            </div>

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

export default Settings;
