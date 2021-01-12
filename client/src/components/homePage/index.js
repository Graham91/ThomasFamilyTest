import React, { useState } from "react";
import "./homePage.css";
import AuthLink from "../AuthLink/";
import SelectUser from "../selectUser/";

function HomePage(props) {
  return (
    <div>
      <AuthLink />
      <SelectUser />
    </div>
  );
}

export default HomePage;
