import React, { useState } from "react";
import "./PasswordModule.css";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";

function PasswordModule(props) {
  return (
    <div>
      <div className="modulescreencover"></div>
      <div className="passwordmodulemain">
        <div className="userbackbutton" onClick={props.return}>
          Back
        </div>
        <div>Hello {props.user}</div>
        Enter password
        <input></input>
      </div>
    </div>
  );
}

export default PasswordModule;
