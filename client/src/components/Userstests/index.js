import React, { useState } from "react";
import "./Usertests.css";

function Userstests(props) {
  const [newtestsActive, setnewtestsState] = useState(true);
  const [completedtestsActive, setcompletedtestsState] = useState(false);
  const [unfinishedtestsActive, setunfinishedtestsState] = useState(false);
  const color3 = props.color3;
  const bordercolor3 = color3 + "border";
  return (
    <div>
      <div className={`locationDescriptiongreen ${props.color1}`}>
        <div
          className={`adduser ${newtestsActive ? color3 : ""}`}
          onClick={() => {
            setnewtestsState(true);
            setcompletedtestsState(false);
            setunfinishedtestsState(false);
          }}
        >
          New
        </div>
        <div
          className={`deleteuser ${completedtestsActive ? color3 : ""}`}
          onClick={() => {
            setnewtestsState(false);
            setcompletedtestsState(true);
            setunfinishedtestsState(false);
          }}
        >
          Completed
        </div>
        <div
          className={`edituser ${unfinishedtestsActive ? color3 : ""}`}
          onClick={() => {
            setnewtestsState(false);
            setcompletedtestsState(false);
            setunfinishedtestsState(true);
          }}
        >
          Unfinished
        </div>
      </div>
      <div
        className={`userpageblock ${
          newtestsActive ? "" : "hide"
        }  ${bordercolor3}`}
      >
        New Test
      </div>
      <div
        className={`userpageblock ${
          completedtestsActive ? "" : "hide"
        } ${bordercolor3}`}
      >
        Completed Test
      </div>
      <div
        className={`userpageblock ${
          unfinishedtestsActive ? "" : "hide"
        } ${bordercolor3}`}
      >
        Unfinished Tests
      </div>
    </div>
  );
}

export default Userstests;
