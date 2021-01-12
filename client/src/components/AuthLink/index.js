import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthLink.css";

function AuthLink(props) {
  return <Link to="/authProfile">AuthLink</Link>;
}

export default AuthLink;
