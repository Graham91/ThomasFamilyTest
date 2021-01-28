import React, { useState } from "react";
import "./profileImageSmall.css";

function ProfileImage(props) {
  const handleselection = () => {
    props.testchanger(props.name);
  };
  return (
    <div className="profileimgsmall" onClick={handleselection}>
      <img src={props.imgsrc} className="profImagesmall" />
      <div className="personNamemainsmall">{props.name}</div>
    </div>
  );
}

export default ProfileImage;
