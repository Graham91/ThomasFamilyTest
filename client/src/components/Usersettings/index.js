import React, { useState } from "react";
import "./Usersettings.css";

function Usersettings(props) {
  const color3 = props.color3;
  const bordercolor3 = color3 + "border";
  return (
    <div>
      <div className={`locationDescriptiongreen ${props.color1}`}>
        User Settings
      </div>
      <div className={`userpageblock ${bordercolor3}`}>User Settings</div>;
    </div>
  );
}

export default Usersettings;
