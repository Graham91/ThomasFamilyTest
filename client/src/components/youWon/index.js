import React, { useState } from "react";
import "./youWon.css";

function YouWon(props) {
  return (
    <div className={`youwonwhole ${props.show ? "" : "hide"}`}>
      <div className="youwin"></div>
      <div className="wholeimage">
        <img src={props.monkeyimage} className="dancingmonkeys" />
        <div className="correctbox">
          <div className="congratsWords">CORRECT!!</div>
          <div className="congratsWords">You Earned A Monkey Point!!</div>
          <div className="Monkeypointsupdate">
            Total Monkey Points: {props.monkeypoints}
          </div>
        </div>
        <img src={props.monkeyimage} className="dancingmonkeysR" />
      </div>
      <div className="confettibox">
        <img src="https://i.imgur.com/TzglvHI.gif" className="confetti" />
        <img src="https://i.imgur.com/TzglvHI.gif" className="confetti" />
      </div>
    </div>
  );
}

export default YouWon;
