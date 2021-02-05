import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Profilepage.css";
import Userstests from "../Userstests/";
import MonkeyPoints from "../MonkeyPoints/";
import TestTaker from "../testTaker/";
import Usersettings from "../Usersettings/";
import axios from "axios";

function ProfilePage(props) {
  const [userActive, setuserState] = useState(false);
  const [testActive, settestState] = useState(true);
  const [MPActive, setMPState] = useState(true);
  const [showTestTaker, setshowtestTaker] = useState(false);
  const [userpreference, setuserprefence] = useState("unicorn");
  const [getinfoOnce, setgetinfoOnce] = useState(true);
  const [selectedTest, setselectedTest] = useState({});
  const [userinfo, setuserinfo] = useState({
    monkeyPoints: 0,
    tests: [],
    Name: "",
    imageURL: "",
  });
  const userPrefenceObject = {
    unicorn: {
      image: "https://i.imgur.com/dPMtRhb.png",
      color1: "purple",
      color2: "blue",
      color3: "pink",
      color4: "white",
      background: "mainContainerpurple",
    },
    volcano: {
      image: "https://i.imgur.com/7nYpeGs.png",
      color1: "orange",
      color2: "red",
      color3: "yellow",
      color4: "black",
      background: "mainContainerred",
    },
  };
  const { id } = useParams();
  useEffect(() => {
    if (getinfoOnce === true) {
      let userstring = "/api/findUser/" + id;
      console.log(userstring);
      axios.get(userstring).then((res) => {
        let userobject = res.data[0];
        console.log(userobject);
        setuserinfo(userobject);
      });
      setgetinfoOnce(false);
    } else {
    }
  });
  const getAvailbleTest = (testSelected) => {
    setselectedTest(testSelected);
    // console.log(selectedTest.questions);
    setshowtestTaker(true);
  };
  const closetesttaker = () => {
    setshowtestTaker(false);
  };
  return (
    <div>
      <TestTaker
        show={showTestTaker}
        back={closetesttaker}
        questions={selectedTest.questions}
        questionsArray={selectedTest.questionsArray}
      />
      <div className="gridlayout">
        <div
          className={`userManagementHome ${userPrefenceObject[userpreference].color4}`}
        >
          <div className="flexbox">
            <div
              className={`mainContainer ${userPrefenceObject[userpreference].background}`}
            >
              <img
                src={userPrefenceObject[userpreference].image}
                className="backgroundpicture"
              />
              <img
                src={userinfo.imageURL}
                className={`picture ${userPrefenceObject[userpreference].color1}`}
              />
              <div className="personNameBox">
                <div
                  className={`personName ${userPrefenceObject[userpreference].color1}`}
                >
                  {id}
                </div>
              </div>
              <Link to="/" className="userbackbutton">
                back
              </Link>
              <div
                className={`userOptionsBox ${userPrefenceObject[userpreference].color2}`}
              >
                <div
                  className={`options2 ${
                    userActive ? "" : userPrefenceObject[userpreference].color3
                  }`}
                  onClick={() => {
                    setuserState(false);
                    settestState(true);
                    setMPState(true);
                  }}
                >
                  Tests
                </div>
                <div
                  className={`options2 ${
                    testActive ? "" : userPrefenceObject[userpreference].color3
                  }`}
                  onClick={() => {
                    setuserState(true);
                    settestState(false);
                    setMPState(true);
                  }}
                >
                  Settings
                </div>
                <div
                  className={`options2 ${
                    MPActive ? "" : userPrefenceObject[userpreference].color3
                  }`}
                  onClick={() => {
                    setuserState(true);
                    settestState(true);
                    setMPState(false);
                  }}
                >
                  Monkey Points
                </div>
              </div>
            </div>
            <div className="strechWhite"></div>
          </div>
        </div>
        <div className="userspace">
          <div className={` ${userActive ? "hide" : ""}`}>
            <Userstests
              color3={userPrefenceObject[userpreference].color3}
              color2={userPrefenceObject[userpreference].color2}
              color1={userPrefenceObject[userpreference].color1}
              color4={userPrefenceObject[userpreference].color4}
              testinfo={userinfo.tests}
              maketest={getAvailbleTest}
              type="new"
            />
          </div>
          <div className={` ${testActive ? "hide" : ""}`}>
            <Usersettings
              color3={userPrefenceObject[userpreference].color3}
              color2={userPrefenceObject[userpreference].color2}
              color1={userPrefenceObject[userpreference].color1}
              color4={userPrefenceObject[userpreference].color4}
            />
          </div>
          <div className={` ${MPActive ? "hide" : ""}`}>
            <MonkeyPoints
              color3={userPrefenceObject[userpreference].color3}
              color2={userPrefenceObject[userpreference].color2}
              color1={userPrefenceObject[userpreference].color1}
              color4={userPrefenceObject[userpreference].color4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
