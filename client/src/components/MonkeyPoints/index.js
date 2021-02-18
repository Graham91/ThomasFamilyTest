import React, { useState } from "react";
import "./MonkeyPoints.css";

function MonkeyPoints(props) {
  const color3 = props.color3;
  const bordercolor3 = color3 + "border";

  return (
    <div>
      <div className={`locationDescriptiongreen ${props.color1}`}>
        Monkey Points
      </div>
      <div className={`userpageblock ${bordercolor3}`}>
        You have {props.monkeypoints} Monkey Points
      </div>
      ;
    </div>
  );
}

export default MonkeyPoints;
