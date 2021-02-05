import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    if (event.target.name == "email") {
      setEmail(event.target.value);
    } else setPassword(event.target.value);
  };

  return (
    <div id="flexgrid">
      <h1>Welcome to the sleeping study</h1>

      <br />
      <br />
      <br />
      <p>Your participation will help understand human sleep behavior.</p>
      <br />
      <div className="Formholder">
        <span id="logintext">Log in</span>
        <form>
          <input
            name="email"
            className="logininput"
            value={email}
            onChange={onChange}
            type="text"
            placeholder="Email Address"
            autoComplete="username"
          />
          <br />
          <input
            name="password"
            className="logininput"
            value={password}
            onChange={onChange}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <br />
          <br />
          <Button>Sign in</Button>
          <br />
          <Link to="/menu">
            <Button>Log in Anonymously</Button>
          </Link>
          <br />
          <br />
        </form>
      </div>

      <div id="messageModal"></div>
    </div>
  );
};

export default Auth;
