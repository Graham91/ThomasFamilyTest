import React, { useState } from "react";
import "./profileimage.css";
import { Link } from "react-router-dom";

function ProfileImage(props) {
  const handleselection = () => {
    props.password(props.name);
  };
  return (
    <div className="profileimgmain" onClick={handleselection}>
      <img src={props.imgsrc} className="profImage" />
      <div className="personNamemain">{props.name}</div>
    </div>
  );
}

export default ProfileImage;
