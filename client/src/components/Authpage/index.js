import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Authpage.css";

function AuthPage(props) {
  return (
    <div>
      <div className="managementHome">
        <Link to="/" className="backbutton">
          back
        </Link>
        <div className="optionsBox">
          <div className="options">Manage Users</div>
          <div className="options">Add Test</div>
          <div className="options">View saved Tested</div>
          <div className="options">Edit tests</div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
