import React, { useState, useEffect } from "react";
import "./EditModule.css";
import axios from "axios";

function EditModule(props) {
  const [name, setName] = useState("");
  const [imgSource, setimgSource] = useState("");
  const [password, setPassword] = useState("");
  const [passwordOnce, setpasswordOnce] = useState(true);
  const [imgOnce, setimgOnce] = useState(true);

  useEffect(() => {
    // if (fetchOnce === true) {
    setName(props.user);
    if (imgOnce === true) {
      setimgSource(props.imgurl);
    }
    if (passwordOnce === true) {
      setPassword(props.password);
    }

    // } else {
    // }
  });

  function editButton(e) {
    e.preventDefault();
    let indicator = e.target.value;
    if (indicator === "password") {
      setpasswordOnce(false);
    }
    if (indicator === "imgURL") {
      setimgOnce(false);
    }
  }

  function handleclick() {
    let userData = {
      name: name,
      userhtml: imgSource,
      password: password,
    };
    console.log(userData);
    axios.put("/api/updateuser", { userData }).then((res) => {
      window.location.reload(false);
      console.log(res);
      console.log(res.data);

      props.return();
    });
    // event.preventDefault();
  }

  return (
    <div>
      <div className="modulescreencover"></div>
      <div className="passwordmodulemain">
        <div className="userbackbutton" onClick={props.return}>
          Back
        </div>
        <div>Hello {props.user}</div>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Image Source
            <input
              name="ImageSource"
              type="text"
              value={imgSource}
              onChange={(e) => setimgSource(e.target.value)}
            />
            <button onClick={editButton} value="imgURL">
              Edit
            </button>
          </label>
          <br />
          <label>
            Password
            <input
              name="ImageSource"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={editButton} value="password">
              Edit
            </button>
          </label>
        </form>
        <button type="submit" value="Submit" onClick={handleclick}>
          submit
        </button>
      </div>
    </div>
  );
}

export default EditModule;
