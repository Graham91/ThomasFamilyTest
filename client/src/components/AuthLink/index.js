import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "./AuthLink.css";

function AuthLink(props) {
  return (
    <div className="banner">
      <span>
        <Link
          to={{
            pathname: "/authProfile",
          }}
          style={{
            textDecoration: "none",
            color: "inherit",
            color: "blue",
          }}
        >
          T
        </Link>
      </span>
      <span>homas Family Tests</span>
    </div>
  );
}

export default AuthLink;
