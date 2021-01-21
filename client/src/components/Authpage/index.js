import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Authpage.css";
import CreateUser from "../createUser/";
import Addtest from "../AddTest/";
import axios from "axios";

function AuthPage(props) {
  const [userActive, setuserState] = useState(false);
  const [testActive, settestState] = useState(true);
  const [aviableUsers, setaviableUsers] = useState([]);
  const [fetchOnce, setfetchOnce] = useState(true);
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
  // const data = this.props.location;

  return (
    <div className="gridlayout">
      <div className="managementHome">
        <Link to="/" className="backbutton">
          back
        </Link>
        <div className="optionsBox">
          <div
            className={`options ${userActive ? "" : "coral"}`}
            onClick={() => {
              setuserState(false);
              settestState(true);
            }}
          >
            Manage Users
          </div>
          <div
            className={`options ${testActive ? "" : "coral"}`}
            onClick={() => {
              setuserState(true);
              settestState(false);
            }}
          >
            Tests
          </div>
        </div>
      </div>
      <div className="userspace">
        <div className={` ${userActive ? "hide" : ""}`}>
          <CreateUser userInfo={aviableUsers} />
        </div>
        <div className={` ${testActive ? "hide" : ""}`}>
          <Addtest />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
