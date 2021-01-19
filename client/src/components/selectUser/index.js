import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./selectUser.css";
import ProfileImage from "../Profileimage";

const SelectUser = (props) => {
  return (
    <div className="linkBox">
      <Link to="/profile">selectUser</Link>
      {props.list.map((person, index) => (
        <ProfileImage
          imgsrc={person.imageURL}
          name={person.Name}
          key={index}
          password={props.password}
        />
      ))}
    </div>
  );
};

export default SelectUser;
