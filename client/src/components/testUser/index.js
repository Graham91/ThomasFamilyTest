import React, { useState } from "react";
import "./testUser.css";
import axios from "axios";

function TestUser(props) {
  const runMakeTest = () => {
    let findtestURL = "/api/singleTest/" + props.name;
    axios.get(findtestURL).then((res) => {
      props.maketest(res.data[0]);
      // console.log(res.data[0]);
    });
  };
  return (
    <div className="testCardUser" onClick={runMakeTest}>
      <div className="testNameuser">{props.name}</div>
    </div>
  );
}

export default TestUser;
