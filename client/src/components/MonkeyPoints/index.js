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
        <div className="goldenCircle"></div>
        <img src="https://i.imgur.com/BXZkajM.gif" className="sparklegif" />
        <img src="https://i.imgur.com/Rgw54lV.png" className="monkeytrophey" />
        <div className="monkeypointstotal">
          Total Monkey Points: {props.monkeypoints}
        </div>
      </div>
    </div>
  );
}

export default MonkeyPoints;
