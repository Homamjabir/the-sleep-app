import React, { useState } from "react";
import {Modal,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


const Auth = () =>  {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[showMessage,setShowMessage] = useState(false);

   const onChange = (event) =>  {
       if(event.target.name == 'email'){
        setEmail(event.target.value);
       }
       else
        setPassword(event.target.value);
    }

    const hideMessage = () => {
        setShowMessage(false);
    }
    
      return (
        <div id="flexgrid">
            <h1>Welcome to the sleeping study</h1>

            <br/>
            <br/>
            <br/>
            <p>
                Your participation will help
                understand human sleep behavior.
            </p>
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
            <br/>
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
            <Link to="/menu">
            <Button>Log in Anonymously</Button>
            </Link>
            <br/>
            <br/>
        </form>

        </div>

        <div id="messageModal">
            <Modal aria-labelledby="contained-modal-title-vcenter" centered
            show={showMessage} onHide={hideMessage}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="titles">{message}</Modal.Title>
                </Modal.Header>
            </Modal>
        </div>

        </div>
      );
  }
 
export default Auth;