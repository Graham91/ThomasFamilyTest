import React, { useState } from "react";

import "./displayUser.css";

function DisplayUser(props) {
  function handleclick() {
    console.log(props.userinfo);
    // event.preventDefault();
  }

  return (
    <div className="userbox">
      <img className="smallimg" src={props.imgsrc} />
      <div className="writing">
        <p>Name: {props.name}</p>
        <p>Password={props.password}</p>
        <p>Monkey Points={props.monkeypoints}</p>
      </div>
    </div>
  );
}

export default DisplayUser;
