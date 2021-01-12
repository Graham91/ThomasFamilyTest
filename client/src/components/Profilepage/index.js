import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profilepage.css";
import Userstests from "../Userstests/";

function ProfilePage(props) {
  return (
    <div>
      <Link to="/">back</Link>
      <p>ProfilePage </p>
      <Userstests />
    </div>
  );
}

export default ProfilePage;
