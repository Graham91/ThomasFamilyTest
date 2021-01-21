import React, { useState, useEffect } from "react";
import "./homePage.css";
import AuthLink from "../AuthLink/";
import SelectUser from "../selectUser/";
import PasswordModule from "../PasswordModule/";
import axios from "axios";

function HomePage(props) {
  const [fetchOnce, setfetchOnce] = useState(true);
  const [aviableUsers, setaviableUsers] = useState([]);
  const [showPassword, setshowPassword] = useState(true);
  const [selecteduser, setselecteduser] = useState("");

  useEffect(() => {
    if (fetchOnce === true) {
      axios.get("api/users").then((res) => {
        console.log(res);
        setaviableUsers(res.data);
        // this.context.router.push({
        //   pathname: "/authProfile",
        //   state: { users: aviableUsers },
        // });
      });
      setfetchOnce(false);
    } else {
    }
  });
  const passwordmodule = (name) => {
    setshowPassword(false);
    setselecteduser(name);
  };
  const returnTohome = () => {
    setshowPassword(true);
  };

  return (
    <div className="fullscreen">
      <div className={` ${showPassword ? "displayNone" : ""}`}>
        <PasswordModule user={selecteduser} return={returnTohome} />
      </div>
      <div>
        <AuthLink userinfo={aviableUsers} />
      </div>
      <div>
        <SelectUser list={aviableUsers} password={passwordmodule} />
      </div>
    </div>
  );
}

export default HomePage;
