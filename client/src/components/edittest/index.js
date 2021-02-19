import React, { useState } from "react";
import "./edittest.css";
import Editor1 from "../formeditor";
import ProfileImageSmall from "../profileImageSmall";

function Edittest(props) {
  const [showtest, setshowtest] = useState(true);
  const [selecteduser, setselecteduser] = useState("");
  const [testArray, settestArray] = useState([]);
  const [finduser, setfinduser] = useState("");

  const switchtest = (name) => {
    setshowtest(false);
    props.switchuseredit(name);
    console.log(name);
  };
  const switchback = () => {
    setfinduser(1);
    setshowtest(true);
  };
  return (
    <div>
      <div>
        <div className={`displayChoices ${showtest ? "hide" : ""}`}>
          <h1 className="adduserInstructions">Available Tests</h1>
          {/* <table>
            {data.map((row, index) => (
              <tr key={row[0]}>
                {row.map((cellId) => (
                  <th key={cellId}>{cellId}</th>
                ))}
              </tr>
            ))}
          </table> */}
          {props.testArray.map((test, index) => (
            <div className="testoption">
              <div className="testNameedit">{test.testName}</div>
              <div className="testStatusedit">{test.testState}</div>
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
