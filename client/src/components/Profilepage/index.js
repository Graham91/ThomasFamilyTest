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
  const [userpreference, setuserprefence] = useState("volcano");
  const userPrefenceObject = {
    unicorn: {
      image: "https://i.imgur.com/dPMtRhb.png",
      color1: "purple",
      color2: "blue",
      color3: "pink",
      color4: "white",
      background: "mainContainerpurple",
    },
    volcano: {
      image: "https://i.imgur.com/7nYpeGs.png",
      color1: "orange",
      color2: "red",
      color3: "yellow",
      color4: "black",
      background: "mainContainerred",
    },
  };

  return (
    <div className="gridlayout">
      <div
        className={`userManagementHome ${userPrefenceObject[userpreference].color4}`}
      >
        <div className="flexbox">
          <div
            className={`mainContainer ${userPrefenceObject[userpreference].background}`}
          >
            <img
              src={userPrefenceObject[userpreference].image}
              className="backgroundpicture"
            />
            <img
              src="https://i.imgur.com/5RDPVuf.png"
              className={`picture ${userPrefenceObject[userpreference].color1}`}
            />
            <div className="personNameBox">
              <div
                className={`personName ${userPrefenceObject[userpreference].color1}`}
              >
                Christopher
              </div>
            </div>
            <Link to="/" className="userbackbutton">
              back
            </Link>
            <div
              className={`userOptionsBox ${userPrefenceObject[userpreference].color2}`}
            >
              <div
                className={`options2 ${
                  userActive ? "" : userPrefenceObject[userpreference].color3
                }`}
                onClick={() => {
                  setuserState(false);
                  settestState(true);
                  setMPState(true);
                }}
              >
                Tests
              </div>
              <div
                className={`options2 ${
                  testActive ? "" : userPrefenceObject[userpreference].color3
                }`}
                onClick={() => {
                  setuserState(true);
                  settestState(false);
                  setMPState(true);
                }}
              >
                Settings
              </div>
              <div
                className={`options2 ${
                  MPActive ? "" : userPrefenceObject[userpreference].color3
                }`}
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
      <div className="userspace">
        <div className={` ${userActive ? "hide" : ""}`}>
          <Userstests
            color3={userPrefenceObject[userpreference].color3}
            color2={userPrefenceObject[userpreference].color2}
            color1={userPrefenceObject[userpreference].color1}
            color4={userPrefenceObject[userpreference].color4}
          />
        </div>
        <div className={` ${testActive ? "hide" : ""}`}>
          <Usersettings
            color3={userPrefenceObject[userpreference].color3}
            color2={userPrefenceObject[userpreference].color2}
            color1={userPrefenceObject[userpreference].color1}
            color4={userPrefenceObject[userpreference].color4}
          />
        </div>
        <div className={` ${MPActive ? "hide" : ""}`}>
          <MonkeyPoints
            color3={userPrefenceObject[userpreference].color3}
            color2={userPrefenceObject[userpreference].color2}
            color1={userPrefenceObject[userpreference].color1}
            color4={userPrefenceObject[userpreference].color4}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
