import React, { useState } from "react";
import "./addtest.css";
import Editor1 from "../formeditor";
import Edittest from "../edittest";
import AddTestPage from "../addtestpage";
import ViewSavedTests from "../Viewsavedtest";

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
        <AddTestPage users={props.userInfo} testchanger={props.testchanger} />
      </div>
      <div className={`createUseerBlock ${edittestActive ? "" : "hide"}`}>
        <Edittest
          users={props.userInfo}
          testArray={props.testArray}
          userforedittest={props.userforedittest}
          switchuseredit={props.switchuseredit}
        />
      </div>
      <div className={`createUseerBlock ${savedtestActive ? "" : "hide"}`}>
        <ViewSavedTests
          openTestModule={props.openTestModule}
          opensavedtested={props.opensavedtested}
        />
      </div>
    </div>
  );
}

export default Addtest;
