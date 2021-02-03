import React, { useEffect, useState } from "react";
import TestAuth from "../TestAuth";
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
            if (element.testState === "unfinished") {
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
        <p key={index}>{person.testName}</p>
      ))}
    </div>
  );
}

export default UserTestsViewer;
