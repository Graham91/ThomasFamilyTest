import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profilepage.css";
import Userstests from "../Userstests/";
import MonkeyPoints from "../MonkeyPoints/";
import Usersettings from "../Usersettings/";

function ProfilePage(props) {
  const [userActive, setuserState] = useState(false);
  const [testActive, settestState] = useState(true);
  const [MPActive, setMPState] = useState(true);

  return (
    <div>
      <div className="userManagementHome">
        <div className="flexbox">
          <div className="strechWhite"></div>
          <div className="mainConatiner">
            <img
              src="https://i.imgur.com/dPMtRhb.png"
              className="backgroundpicture"
            />
            <img src="https://i.imgur.com/5RDPVuf.png" className="picture" />
            <div className="personNameBox">
              <div className="personName">Christopher</div>
            </div>
            <Link to="/" className="userbackbutton">
              back
            </Link>
            <div className="userOptionsBox">
              <div
                className={`options2 ${userActive ? "" : "userGreen"}`}
                onClick={() => {
                  setuserState(false);
                  settestState(true);
                  setMPState(true);
                }}
              >
                Tests
              </div>
              <div
                className={`options2 ${testActive ? "" : "userGreen"}`}
                onClick={() => {
                  setuserState(true);
                  settestState(false);
                  setMPState(true);
                }}
              >
                Settings
              </div>
              <div
                className={`options2 ${MPActive ? "" : "userGreen"}`}
                onClick={() => {
                  setuserState(true);
                  settestState(true);
                  setMPState(false);
                }}
              >
                Monkey Points
              </div>
            </div>
          </div>
          <div className="strechWhite"></div>
        </div>
      </div>

      <div className={` ${userActive ? "hide" : ""}`}>
        <Userstests />
      </div>
      <div className={` ${testActive ? "hide" : ""}`}>
        <Usersettings />
      </div>
      <div className={` ${MPActive ? "hide" : ""}`}>
        <MonkeyPoints />
      </div>
    </div>
  );
}

export default ProfilePage;
