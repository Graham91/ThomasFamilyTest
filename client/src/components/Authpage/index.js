import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Authpage.css";
import CreateUser from "../createUser/";
import Addtest from "../AddTest/";
import TestCreator from "../TextCreator";
import NameTest from "../NameTest";
import axios from "axios";

function AuthPage(props) {
  const [userActive, setuserState] = useState(false);
  const [testActive, settestState] = useState(true);
  const [aviableUsers, setaviableUsers] = useState([]);
  const [fetchOnce, setfetchOnce] = useState(true);
  const [displayNametest, setdisplayNameTest] = useState(false);
  const [displaytesteditor, setdisplaytesteditor] = useState(false);
  const [selecteduser, setselecteduser] = useState("");
  const [selectedArray, setselectedArray] = useState([]);
  const [userselected, setuserselected] = useState(false);
  const [selectedquestions, setselectedquestions] = useState({});
  const [edituserstructure, setedituserstructure] = useState({});
  const [editNavstructure, seteditNavstructure] = useState({});
  const [testName, settestName] = useState("");

  useEffect(() => {
    if (fetchOnce === true) {
      axios.get("api/users").then((res) => {
        console.log(res);
        setaviableUsers(res.data);
        let structure = {};
        res.data.forEach((element) => {
          structure[element.Name] = {};
        });
        let navStructure = {};
        res.data.forEach((element) => {
          navStructure[element.Name] = [];
        });
        setedituserstructure(structure);
        seteditNavstructure(navStructure);
      });
      setfetchOnce(false);
    } else {
    }
  });

  const updateUserstructure = (name, results, array) => {
    edituserstructure[name] = results;
    editNavstructure[name] = array;
  };

  const testChanger = (name) => {
    setselecteduser(name);
    setdisplayNameTest(true);
  };
  const openTestModule = () => {
    setdisplayNameTest(false);
    setdisplaytesteditor(true);
  };
  const opensavedtested = (questions, array, testname, user) => {
    console.log(questions);
    console.log(array);
    setselectedquestions(questions);
    setselectedArray(array);
    settestName(testname);
    setselecteduser(user);
    setuserselected(true);
  };
  const backButtonfunction = () => {
    setdisplaytesteditor(false);
    setuserselected(false);
  };
  const backButtonfunctionName = () => {
    setdisplayNameTest(false);
  };
  // const data = this.props.location;

  return (
    <div className="gridlayout">
      <NameTest
        user={selecteduser}
        classFinder={displayNametest}
        back={backButtonfunctionName}
        testname={testName}
        settestName={settestName}
        openTestModule={openTestModule}
      />

      <TestCreator
        questions={edituserstructure}
        navArray={editNavstructure}
        update={updateUserstructure}
        classFinder={displaytesteditor}
        selecteduser={selecteduser}
        userInfo={edituserstructure}
        back={backButtonfunction}
        testName={testName}
        selectedArray={selectedArray}
        selectquestions={selectedquestions}
        userselected={userselected}
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
          <Addtest
            userInfo={aviableUsers}
            testchanger={testChanger}
            openTestModule={openTestModule}
            opensavedtested={opensavedtested}
          />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
