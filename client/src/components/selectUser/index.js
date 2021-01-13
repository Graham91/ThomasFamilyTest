import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./selectUser.css";

function SelectUser(props) {
  return (
    <div className="linkBox">
      <Link to="/profile">selectUser</Link>
    </div>
  );
}

export default SelectUser;
