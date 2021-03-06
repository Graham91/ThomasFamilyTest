import React, { useEffect, useState } from "react";
import TestUser from "../testUser";
import "./UserTestViewer.css";

function UserTestsViewer(props) {
  const [runonce, setrunonce] = useState(true);
  const [newarrayobject, setnewarrayobject] = useState({
    new: [],
    unfinished: [],
    completed: [],
  });
  const arrayObject = {
    new: [],
    unfinished: [],
    completed: [],
  };
  useEffect(() => {
    if (props.testinfo.length < 1) {
    } else {
      if (runonce === true) {
        if (props.type === "new") {
          console.log(props.testinfo);
          props.testinfo.forEach((element) => {
            if (element.testState === "new") {
              arrayObject.new.push(element);
            }
          });
          console.log(arrayObject);
          setnewarrayobject({
            new: arrayObject.new,
            unfinished: [],
            completed: [],
          });
          setrunonce(false);
        }
        if (props.type === "completed") {
          props.testinfo.forEach((element) => {
            if (element.testState === "completed") {
              arrayObject.completed.push(element);
            }
          });
          console.log(arrayObject);
          setnewarrayobject({
            new: [],
            unfinished: [],
            completed: arrayObject.completed,
          });
          setrunonce(false);
        }
        if (props.type === "unfinished") {
          props.testinfo.forEach((element) => {
            if (element.testState === "unfinshed") {
              arrayObject.unfinished.push(element);
            }
          });
          console.log(arrayObject);
          setnewarrayobject({
            new: [],
            unfinished: arrayObject.unfinished,
            completed: [],
          });
          setrunonce(false);
        }
      }
    }
  });
  return (
    <div className="savedTestsBox">
      {newarrayobject[props.type].map((person, index) => (
        <TestUser
          key={index}
          name={person.testName}
          maketest={props.maketest}
        />
      ))}
    </div>
  );
}

export default UserTestsViewer;
