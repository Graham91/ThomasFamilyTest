import React, { useState } from "react";
import "./Usertests.css";

function Userstests(props) {
  const [newtestsActive, setnewtestsState] = useState(true);
  const [completedtestsActive, setcompletedtestsState] = useState(false);
  const [unfinishedtestsActive, setunfinishedtestsState] = useState(false);
  return (
    <div>
      <div className="locationDescriptiongreen">
        <div
          className={`adduser ${newtestsActive ? "userGreen" : ""}`}
          onClick={() => {
            setnewtestsState(true);
            setcompletedtestsState(false);
            setunfinishedtestsState(false);
          }}
        >
          New
        </div>
        <div
          className={`deleteuser ${completedtestsActive ? "userGreen" : ""}`}
          onClick={() => {
            setnewtestsState(false);
            setcompletedtestsState(true);
            setunfinishedtestsState(false);
          }}
        >
          Completed
        </div>
        <div
          className={`edituser ${unfinishedtestsActive ? "userGreen" : ""}`}
          onClick={() => {
            setnewtestsState(false);
            setcompletedtestsState(false);
            setunfinishedtestsState(true);
          }}
        >
          Unfinished
        </div>
      </div>
      <div className={`userpageblock ${newtestsActive ? "" : "hide"}`}>
        New Test
      </div>
      <div className={`userpageblock ${completedtestsActive ? "" : "hide"}`}>
        Completed Test
      </div>
      <div className={`userpageblock ${unfinishedtestsActive ? "" : "hide"}`}>
        Unfinished Tests
      </div>
    </div>
  );
}

export default Userstests;
