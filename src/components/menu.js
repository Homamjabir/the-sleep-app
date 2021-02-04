import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./css/menu.css"

class Menu extends Component {
    render() {
      return (
        <div className = "menuContainer">
            Main Menu

            <div className = "menuButtons">

              <Route render={({ history}) => (
                <button type="button" onClick={() => { history.push('/questionnaire') }}>
                  Questionnaire
                </button>
              )} />  
              <Route render={({ history}) => (
                <button type="button" onClick={() => { history.push('/mini-games') }}>
                  Mini-games
                </button>
              )} />  
              <Route render={({ history}) => (
                <button type="button" onClick={() => { history.push('/statistics') }}>
                  Statistics
                </button>
              )} />  
              <Route render={({ history}) => (
                <button type="button" onClick={() => { history.push('/settings') }}>
                  Settings
                </button>
              )} />  
            </div>
        </div>
      );
    }
  }
 
export default Menu;