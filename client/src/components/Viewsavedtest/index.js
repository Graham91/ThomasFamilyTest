import React, { useState } from "react";
import axios from "axios";
import TestAuth from "../TestAuth";
import "./Viewsavedtest.css";

function ViewSavedTests(props) {
  const [savedtests, setsavedtests] = useState([]);
  const getsavedTests = () => {
    axios.get("/api/savedtests").then((res) => {
      console.log(res.data);
      setsavedtests(res.data);
    });
  };
  return (
    <div>
      <button className="" onClick={getsavedTests}>
        Find Saved
      </button>
      <div className="savedTestsBox">
        {savedtests.map((person, index) => (
          <TestAuth
            name={person.Name}
            user={person.User}
            key={index}
            openTestModule={props.openTestModule}
            questions={person.questions}
            questionsArray={person.questionsArray}
            opensavedtested={props.opensavedtested}
          />
        ))}
      </div>
    </div>
  );
}

export default ViewSavedTests;
