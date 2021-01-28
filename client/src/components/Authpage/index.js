import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Authpage.css";
import CreateUser from "../createUser/";
import Addtest from "../AddTest/";
import TestCreator from "../TextCreator";
import axios from "axios";

function AuthPage(props) {
  const [userActive, setuserState] = useState(false);
  const [testActive, settestState] = useState(true);
  const [aviableUsers, setaviableUsers] = useState([]);
  const [fetchOnce, setfetchOnce] = useState(true);
  const [displaytesteditor, setdisplaytesteditor] = useState(false);
  const [selecteduser, setselecteduser] = useState("");
  const [edituserstructure, setedituserstructure] = useState({});

  useEffect(() => {
    if (fetchOnce === true) {
      axios.get("api/users").then((res) => {
        console.log(res);
        setaviableUsers(res.data);
        let structure = {};
        res.data.forEach((element) => {
          structure[element.Name] = {};
        });
        setedituserstructure(structure);
      });
      setfetchOnce(false);
    } else {
    }
  });
  const testChanger = (name) => {
    setselecteduser(name);
    setdisplaytesteditor(true);
  };
  const backButtonfunction = () => {
    setdisplaytesteditor(false);
  };
  // const data = this.props.location;

  return (
    <div className="gridlayout">
      <TestCreator
        classFinder={displaytesteditor}
        selecteduser={selecteduser}
        userInfo={edituserstructure}
        back={backButtonfunction}
      />
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
          <Addtest userInfo={aviableUsers} testchanger={testChanger} />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
