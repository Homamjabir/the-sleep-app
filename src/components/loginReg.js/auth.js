import React, { Component } from "react";
import {Modal,Button} from "react-bootstrap";

class Auth extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            isShowing: false,
            showMessage: false,
            showForgot: false,
        };


    }

    render() {
      return (
        <div id="flexgrid">
            
        <div className="Formholder">
        <span id="logintext">Log in</span>
        

        </div>

        </div>
      );
    }
  }
 
export default Auth;