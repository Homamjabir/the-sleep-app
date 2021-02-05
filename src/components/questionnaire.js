import React from "react";
import { Link } from "react-router-dom";
import "./css/questionnaire.css";
import ReturnIcon from "../images/return-icon.jpg";


const Questionnaire = () => {
  return (
    <div className="questionnaireContainer">
      <Link to="/menu">
        <img src={ReturnIcon} alt="test" width="20" height="20"></img>
      </Link>
      <h1>Questionnaire</h1>
      <p>
        Hello there, human
        <br />I got some questions for you
      </p>

      <div className="questions">
        <div className="question 1">
          <p1>
            Question 1:
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p1>
          <div>
            <input type="radio" name="answer 1" /> Integer eros tortor
            <br />
            <input type="radio" name="answer 1"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 1"/> Integer eros tortor
          </div>
        </div>
        <br />
        <div className="question 2">
          <p1>
            Question 2:
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p1>
          <div>
            <input type="radio" name="answer 2" /> Integer eros tortor
            <br />
            <input type="radio" name="answer 2"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 2"/> Integer eros tortor
          </div>
        </div>
        <br />
        <div>
          <p1>
            Question 3:
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p1>
          <div>
            <input type="radio" name="answer 3"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 3"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 3"/> Integer eros tortor
          </div>
        </div>
        <br />
        <div>
          <p1>
            Question 4:
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p1>
          <div>
            <input type="radio" name="answer 4"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 4"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 4"/> Integer eros tortor
          </div>
        </div>
        <br />
        <div>
          <p1>
            Question 5:
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p1>
          <div>
            <input type="radio" name="answer 5"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 5"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 5"/> Integer eros tortor
          </div>
        </div>
        <br />
        <div>
          <p1>
            Question 6:
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p1>
          <div>
            <input type="radio" name="answer 6"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 6"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 6"/> Integer eros tortor
          </div>
        </div>
        <br />
        <div>
          <p1>
            Question 7:
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p1>
          <div>
            <input type="radio" name="answer 7"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 7"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 7"/> Integer eros tortor
          </div>
        </div>
        <br />
        <div>
          <p1>
            Question 8:
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p1>
          <div>
            <input type="radio" name="answer 8"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 8"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 8"/> Integer eros tortor
          </div>
        </div>
        <br />
        <div>
          <p1>
            Question 9:
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p1>
          <div>
            <input type="radio" name="answer 9"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 9"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 9"/> Integer eros tortor
          </div>
        </div>
        <br />
        <div>
          <p1>
            Question 10:
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p1>
          <div>
            <input type="radio" name="answer 10"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 10"/> Integer eros tortor
            <br />
            <input type="radio" name="answer 1"/> Integer eros tortor
          </div>
        </div>
      </div>
      <div>
        <Link to='/menu'>
          <button className="buttonTest" onClick={()=> console.log("click")}>Done</button>
        </Link>
      </div>
    </div>
  );
};

export default Questionnaire;
