import React, { useState } from "react";
import "./addtestpage.css";
import ProfileImageSmall from "../profileImageSmall";
import ProfileImage from "../Profileimage";

function AddTestPage(props) {
  return (
    <div>
      <h1 className="adduserInstructions">Select Family Member For New Test</h1>
      <div className="displayChoices">
        {props.users.map((person, index) => (
          <ProfileImageSmall
            imgsrc={person.imageURL}
            name={person.Name}
            key={index}
            testchanger={props.testchanger}
            //   password={props.password}
          />
        ))}
      </div>
    </div>
  );
}

export default AddTestPage;
