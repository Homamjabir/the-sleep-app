import React from "react";
import { Route, Link } from "react-router-dom";
import "./css/menu.css";
import ReturnIcon from "../images/return-icon.jpg";

const Settings = () => {
  return (
    <div className="SettingsContainer">
      <Link to="/menu">
        <img src={ReturnIcon} alt="test" width="20" height="20"></img>
      </Link>
      <h1>Settings</h1>

      <div className="menuButtons">
        <Route
          render={({ history }) => (
            <button
              type="button"
              onClick={() => {
                history.push("/about");
              }}
            >
              About the App
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default Settings;
