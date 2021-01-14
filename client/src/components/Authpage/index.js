import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Authpage.css";
import CreateUser from "../createUser/";
import Addtest from "../AddTest/";

function AuthPage(props) {
  const [userActive, setuserState] = useState(false);
  const [testActive, settestState] = useState(true);

  return (
    <div>
      <div className="managementHome">
        <Link to="/" className="backbutton">
          back
        </Link>
        <div className="optionsBox">
          <div
            className="options"
            onClick={() => {
              setuserState(false);
              settestState(true);
            }}
          >
            Manage Users
          </div>
          <div
            className="options"
            onClick={() => {
              setuserState(true);
              settestState(false);
            }}
          >
            Tests
          </div>
        </div>
      </div>

      <div className={` ${userActive ? "hide" : ""}`}>
        <CreateUser />
      </div>
      <div className={` ${testActive ? "hide" : ""}`}>
        <Addtest />
      </div>
    </div>
  );
}

export default AuthPage;
