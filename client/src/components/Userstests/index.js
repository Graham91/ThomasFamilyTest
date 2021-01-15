import React, { useState } from "react";
import "./Usertests.css";

function Userstests(props) {
  const [newtestsActive, setnewtestsState] = useState(true);
  const [completedtestsActive, setcompletedtestsState] = useState(false);
  const [unfinishedtestsActive, setunfinishedtestsState] = useState(false);
  return (
    <div>
      <div className="locationDescription">
        <div
          className={`adduser ${newtestsActive ? "colorselected" : ""}`}
          onClick={() => {
            setnewtestsState(true);
            setcompletedtestsState(false);
            setunfinishedtestsState(false);
          }}
        >
          New
        </div>
        <div
          className={`deleteuser ${
            completedtestsActive ? "colorselected" : ""
          }`}
          onClick={() => {
            setnewtestsState(false);
            setcompletedtestsState(true);
            setunfinishedtestsState(false);
          }}
        >
          Completed
        </div>
        <div
          className={`edituser ${unfinishedtestsActive ? "colorselected" : ""}`}
          onClick={() => {
            setnewtestsState(false);
            setcompletedtestsState(false);
            setunfinishedtestsState(true);
          }}
        >
          Unfinished
        </div>
      </div>
      <div className={`createUseerBlock ${newtestsActive ? "" : "hide"}`}>
        New Test
      </div>
      <div className={`createUseerBlock ${completedtestsActive ? "" : "hide"}`}>
        Completed Test
      </div>
      <div
        className={`createUseerBlock ${unfinishedtestsActive ? "" : "hide"}`}
      >
        Unfinished Tests
      </div>
    </div>
  );
}

export default Userstests;
