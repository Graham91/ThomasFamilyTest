import React, { useState } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "./selectUser.css";
import ProfileImage from "../Profileimage";

const SelectUser = (props) => {
  return (
    <div className="linkBox">
      {props.list.map((person, index) => (
        <Link to={"/profile/" + person.Name}>
          <ProfileImage
            imgsrc={person.imageURL}
            name={person.Name}
            key={index}
            password={props.password}
          />
        </Link>
      ))}
    </div>
  );
};

export default SelectUser;
