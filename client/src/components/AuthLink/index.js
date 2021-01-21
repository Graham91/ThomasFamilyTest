import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AuthLink.css";

function AuthLink(props) {
  return (
    <div className="banner">
      <Link
        to={{
          pathname: "/authProfile",
        }}
        style={{ textDecoration: "none", color: "white" }}
      >
        Tiffany's Tests
      </Link>
    </div>
  );
}

export default AuthLink;
