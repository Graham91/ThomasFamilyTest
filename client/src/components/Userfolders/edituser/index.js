import React, { useState } from "react";
import axios from "axios";
import DisplayUser from "../displayUser";
import EditModule from "../EditModule";
import "./edituser.css";

function EditUser(props) {
  const [showedit, setshowedit] = useState(true);
  const [selecteduser, setselecteduser] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [password, setPassword] = useState("");

  const handleclick = (e) => {
    let str = e.target.value;
    var array = str.split("|");

    let person = array[0];
    let number = parseInt(array[1]);
    let imgurl = props.userinfo[number].imageURL;
    let passwordlet = props.userinfo[number].password;
    console.log(props.userinfo[number]);
    console.log(person + " password:" + password);
    // axios
    //   .put("/api/deleteuser", { name: person, password: password })
    //   .then((res) => {
    //     console.log(res);
    //     window.location.reload(false);
    //     console.log(res.data);
    //   });
    setselecteduser(person);
    setPassword(passwordlet);
    setimageURL(imgurl);
    setshowedit(false);
  };
  const returnTohome = () => {
    setshowedit(true);
  };

  return (
    <div>
      <div className={` ${showedit ? "displayNone" : ""}`}>
        <EditModule
          return={returnTohome}
          user={selecteduser}
          imgurl={imageURL}
          password={password}
        />
      </div>
      {props.userinfo.map((person, index) => (
        <div className="userWhole">
          <DisplayUser
            imgsrc={person.imageURL}
            name={person.Name}
            key={index}
            password={person.password}
          />
          <button
            className="DeleteButton"
            value={person.Name + "|" + index}
            onClick={handleclick}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default EditUser;
