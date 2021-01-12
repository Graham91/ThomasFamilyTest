import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Authpage.css";

function AuthPage(props) {
  return (
    <div>
      <Link to="/">back</Link>
      <p>AuthPage</p>
    </div>
  );
}

export default AuthPage;
