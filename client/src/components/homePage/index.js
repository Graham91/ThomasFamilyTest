import React, { useState } from "react";
import "./homePage.css";
import AuthLink from "../AuthLink/";
import SelectUser from "../selectUser/";

function HomePage(props) {
  return (
    <div>
      <div>
        <AuthLink />
      </div>
      <div>
        <SelectUser />
      </div>
    </div>
  );
}

export default HomePage;
