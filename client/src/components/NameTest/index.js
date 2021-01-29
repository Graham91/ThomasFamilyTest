import React, { useState } from "react";
import "./nametest.css";

function NameTest(props) {
  return (
    <div className={`${props.classFinder ? "" : "hide"}`}>
      <div className="moduleBackground"></div>
      <div className="addNameModule">
        <button onClick={props.back}>Back</button>
        <h2>Test For {props.user}</h2>
        <h3>Name Test:</h3>
        <input
          value={props.testName}
          onChange={(e) => props.settestName(e.target.value)}
        ></input>
        <button onClick={props.openTestModule}>Submit</button>
      </div>
    </div>
  );
}

export default NameTest;
