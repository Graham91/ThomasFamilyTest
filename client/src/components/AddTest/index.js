import React, { useState } from "react";
import "./addtest.css";

function Addtest(props) {
  const [addtestActive, setaddtestState] = useState(true);
  const [edittestActive, setedittestState] = useState(false);
  const [savedtestActive, setsavedtestState] = useState(false);
  return (
    <div>
      <div className="locationDescription">
        <div
          className={`adduser ${addtestActive ? "colorselected" : ""}`}
          onClick={() => {
            setaddtestState(true);
            setedittestState(false);
            setsavedtestState(false);
          }}
        >
          Add
        </div>
        <div
          className={`deleteuser ${edittestActive ? "colorselected" : ""}`}
          onClick={() => {
            setaddtestState(false);
            setedittestState(true);
            setsavedtestState(false);
          }}
        >
          Edit
        </div>
        <div
          className={`edituser ${savedtestActive ? "colorselected" : ""}`}
          onClick={() => {
            setaddtestState(false);
            setedittestState(false);
            setsavedtestState(true);
          }}
        >
          Saved
        </div>
      </div>
      <div className={`createUseerBlock ${addtestActive ? "" : "hide"}`}>
        Add Test
      </div>
      <div className={`createUseerBlock ${edittestActive ? "" : "hide"}`}>
        Edit Test
      </div>
      <div className={`createUseerBlock ${savedtestActive ? "" : "hide"}`}>
        Saved Tests
      </div>
    </div>
  );
}

export default Addtest;
