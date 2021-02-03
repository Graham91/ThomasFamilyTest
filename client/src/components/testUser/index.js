import React, { useState } from "react";
import "./testUser.css";

function TestUser(props) {
  return (
    <div className="testCardUser">
      <div className="testNameuser">{props.name}</div>
    </div>
  );
}

export default TestUser;
