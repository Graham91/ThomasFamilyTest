import React, { useState } from "react";
import "./youLost.css";

function YouLost(props) {
  const monkeyEscapeImages = [
    "https://i.imgur.com/12UvXTZ.gif",
    "https://i.imgur.com/fMDxIay.gif",
    "https://i.imgur.com/wErNom9.gif",
    "https://i.imgur.com/WUVgZuv.gif",
  ];
  return (
    <div className={`youwonwhole ${props.show ? "" : "hide"}`}>
      <div className="youlost"></div>
      <div className="lostwholeimage">
        <div className="placeholder">
          <img src={monkeyEscapeImages[2]} className="lostdancingaligator" />
          <img src={monkeyEscapeImages[0]} className="lostdancingmonkeys" />
        </div>
        <div className="lostcorrectbox">
          <div className="congratsWords">Opps!!</div>
          <div className="congratsWords">
            That Monkey Escaped!! Don't worry :) You'll Get Him Later!!
          </div>
        </div>
        <div className="placeholder">
          <img src={monkeyEscapeImages[1]} className="lostdancingmonkeysR" />
          <img src={monkeyEscapeImages[3]} className="lostdancingaligatorR" />
        </div>
      </div>
    </div>
  );
}

export default YouLost;
