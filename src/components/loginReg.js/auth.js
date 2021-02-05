import React, { Component } from "react";
import {Modal,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


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

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const {email,password} = this.state;
      return (
        <div id="flexgrid">
            
        <div className="Formholder">
        <span id="logintext">Log in</span>
        <form>
            <input 
                name="email"
                className="logininput"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
                autoComplete="username"
            />
            <br/>
            <input 
                name="password"
                className="logininput"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
            />
            <br/>
            <Button onClick={this.Signin}>
                Sing in
            </Button>
            <br/>
            <br/>
        </form>

        </div>

        </div>
      );
    }
  }
 
export default Auth;