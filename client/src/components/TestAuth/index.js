import React, { useState } from "react";
import "./testAuth.css";

function TestAuth(props) {
  const runfunctions2 = () => {
    props.opensavedtested(
      props.questions[0],
      props.questionsArray,
      props.name,
      props.user
    );
    props.openTestModule();
  };
  return (
    <div className="testcard" onClick={runfunctions2}>
      <div className="personNametest">{props.user}</div>
      <div className="testName">{props.name}</div>
    </div>
  );
}

export default TestAuth;
