import React, { useState } from "react";

import btnOff from "../img/lightbtnOff.png";
import btnOn from "../img/lightbtnOn.png";
import merkel from "../img/merkel.png";
import question1 from "../img/question1.png";
import question2 from "../img/question2.png";
import wc from "../img/toilet.jpg";
import waldo from "../img/waldo-toilet.png";

import "./Door.css";

import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";

export default function Door() {
  const [doorOpened, setDoorOpened] = useState(false);
  const [lightOn, setLightOn] = useState(false);
  const [question1Visible, setQuestion1Visible] = useState(true);

  const handleQuestionClick = () => {
    setQuestion1Visible(!question1Visible);
  };

  const doorAction = () => {
    if (doorOpened) {
      setDoorOpened(false);
    } else {
      setDoorOpened(true);
    }
  };

  const lightAction = () => {
    if (lightOn) {
      setLightOn(false);
    } else {
      setLightOn(true);
    }
  };

  return (
    <div>
      <Container>
        <div className="doorCombo">
          <div className="question" onClick={handleQuestionClick}>
            {question1Visible ? (
              <img style={{ height: "10vh" }} src={question1} alt="" />
            ) : (
              <img style={{ height: "10vh" }} src={question2} alt="" />
            )}
          </div>
          <img className="merkel" src={merkel} alt="" />

          <div>
            <img className="wc" src={wc} alt="" />

            <div
              className={doorOpened ? "doorOpened" : "doorClosed"}
              onClick={doorAction}
            >
              {doorOpened && (
                <div className={lightOn ? "lightOn" : "lightOff"}>
                  <img
                    className={lightOn ? "lightOnImg" : "lightOffImg"}
                    src={waldo}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
          <div className="wcLight">
            <div onClick={lightAction}>
              {lightOn ? (
                <img id="lightButton" src={btnOff} alt=""></img>
              ) : (
                <img id="lightButton" src={btnOn} alt=""></img>
              )}
            </div>
          </div>
        </div>
      </Container>
      <footer className="floor">
        <a href="https://www.vecteezy.com/free-vector/door">
          Door Vectors by Vecteezy
        </a>
        <a href="https://www.freepik.com/photos/background">
          Background photo created by yingyang - www.freepik.com
        </a>
      </footer>
    </div>
  );
}
