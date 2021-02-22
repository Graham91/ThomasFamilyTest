import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Profilepage.css";
import Userstests from "../Userstests/";
import MonkeyPoints from "../MonkeyPoints/";
import TestTaker from "../testTaker/";
import YouWon from "../youWon/";
import YouLost from "../youlost";
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
  const [monkeyimageselector, setmonkeyimageselector] = useState(0);
  const [showYouwon, setshowYouwon] = useState(false);
  const [showYoulost, setshowYoulost] = useState(false);
  const [personName, setpersonName] = useState("");
  const [userinfo, setuserinfo] = useState({
    monkeyPoints: 0,
    tests: [],
    Name: "",
    imageURL: "",
    profileSettings: "",
  });

  const monkeyimages = [
    "https://i.imgur.com/NQczMZO.gif",
    "https://i.imgur.com/qxwSE1v.gif",
    "https://i.imgur.com/tNyV2zC.gif",
    "https://i.imgur.com/TzDe3js.gif",
    "https://i.imgur.com/3urHj7j.gif",
    "https://i.imgur.com/ETmNAhu.gif",
    "https://i.imgur.com/dRKa2wP.gif",
    "https://i.imgur.com/jZWO2E8.gif",
    "https://i.imgur.com/O0KZlBF.gif",
  ];
  const userPrefenceObject = {
    unicorn: {
      image: "https://i.imgur.com/z26lJju.png",
      color1: "purple",
      color2: "blue",
      color3: "pink",
      color4: "white",
      color5: "cloudwhite",
      boxshadow: "boxshadowwhite",
      background: "mainContainerpurple",
    },
    volcano: {
      image: "https://i.imgur.com/htC4Icx.png",
      color1: "orange",
      color2: "red",
      color3: "yellow",
      color4: "black",
      color5: "darkestgrey",
      boxshadow: "boxshadow",
      background: "mainContainerred",
    },
    shark: {
      image: "https://i.imgur.com/Cw4jMTX.png",
      color1: "middleBlue",
      color2: "darkblue",
      color3: "lightblue",
      color4: "white",
      color5: "darkestblue",
      boxshadow: "boxshadow",
      background: "mainContainerblue",
    },
  };
  const { id } = useParams();
  useEffect(() => {
    if (getinfoOnce === true) {
      let userstring = "/api/findUser/" + id;
      setpersonName(id);
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
  const updatebaseMonkeypoints = (monkeynumber) => {
    let newUserInfo = { ...userinfo };
    newUserInfo.monkeyPoints = monkeynumber;
    setuserinfo(newUserInfo);
  };
  const getAvailbleTest = (testSelected) => {
    setselectedTest(testSelected);
    console.log("click");
    // console.log(selectedTest.questions);
    setshowtestTaker(true);
  };
  const closetesttaker = () => {
    setshowtestTaker(false);
    setselectedTest({});
  };
  const changeWinMonkey = () => {
    if (monkeyimageselector < monkeyimages.length - 1) {
      setmonkeyimageselector(monkeyimageselector + 1);
    } else {
      setmonkeyimageselector(0);
    }
  };
  const showYouwonfunction = () => {
    setshowYouwon(true);
    setTimeout(function () {
      setshowYouwon(false);
    }, 8000);
  };
  const showYoulostfunction = () => {
    setshowYoulost(true);
    setTimeout(function () {
      setshowYoulost(false);
    }, 8000);
  };

  return (
    <div>
      <YouLost show={showYoulost} />
      <YouWon
        monkeyimage={monkeyimages[monkeyimageselector]}
        show={showYouwon}
        monkeypoints={userinfo.monkeyPoints}
      />
      <TestTaker
        personName={personName}
        show={showTestTaker}
        back={closetesttaker}
        name={selectedTest.Name}
        questions={selectedTest.questions}
        questionsArray={selectedTest.questionsArray}
        changemonkey={changeWinMonkey}
        showyouwon={showYouwonfunction}
        showyoulost={showYoulostfunction}
        monkeypoints={userinfo.monkeyPoints}
        updateMonkeyPoints={updatebaseMonkeypoints}
      />
      <div
        className={`gridlayout2 ${userPrefenceObject[userpreference].color5}`}
      >
        <div className={userPrefenceObject[userpreference].boxshadow}></div>
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
          </div>
        </div>
        <div className="userspace2">
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
              changepreference={setuserprefence}
              lastpreference={userinfo.profileSettings}
              personName={personName}
            />
          </div>
          <div className={` ${MPActive ? "hide" : ""}`}>
            <MonkeyPoints
              color3={userPrefenceObject[userpreference].color3}
              color2={userPrefenceObject[userpreference].color2}
              color1={userPrefenceObject[userpreference].color1}
              color4={userPrefenceObject[userpreference].color4}
              monkeypoints={userinfo.monkeyPoints}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
