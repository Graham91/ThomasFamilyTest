import React, { useState } from "react";
import "./addtestpage.css";
import ProfileImageSmall from "../profileImageSmall";
import ProfileImage from "../Profileimage";

function AddTestPage(props) {
  return (
    <div>
      <div>Choose a person</div>
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
