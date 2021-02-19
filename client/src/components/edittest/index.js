import React, { useState } from "react";
import "./edittest.css";
import Editor1 from "../formeditor";
import ProfileImageSmall from "../profileImageSmall";
import axios from "axios";

function Edittest(props) {
  const [showtest, setshowtest] = useState(true);
  const [selecteduser, setselecteduser] = useState("");
  const [testArray, settestArray] = useState([]);
  const [finduser, setfinduser] = useState("");

  const switchtest = (name) => {
    setshowtest(false);
    setselecteduser(name);
    props.switchuseredit(name);
    console.log(name);
  };
  const switchback = () => {
    setfinduser(1);
    setshowtest(true);
  };
  const handleclick = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    let testName = e.target.value;
    axios
      .put("/api/deletetest", { name: selecteduser, testName: testName })
      .then((res) => {
        console.log(res);
        window.location.reload(false);
        console.log(res.data);
      });
  };
  return (
    <div>
      <div>
        <div className={`displayChoices ${showtest ? "hide" : ""}`}>
          <h1 className="adduserInstructionsedit">Available Tests</h1>
          {props.testArray.map((test, index) => (
            <div className="testoption">
              <div className="testNameedit">{test.testName}</div>
              <div className="testStatusedit">{test.testState}</div>
              <button
                className="deletetestbutton"
                value={test.testName}
                onClick={handleclick}
              >
                Delete
              </button>
            </div>
          ))}
          <button onClick={switchback}>back</button>
        </div>
        <div className={`displayChoices ${showtest ? "" : "hide"}`}>
          <h1 className="adduserInstructions">Select User for Test Edit</h1>
          {props.users.map((person, index) => (
            <ProfileImageSmall
              imgsrc={person.imageURL}
              name={person.Name}
              key={index}
              testchanger={switchtest}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Edittest;
