import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./adduser.css";

function AddUser(props) {
  const [name, setName] = useState("");
  const [imgSource, setimgSource] = useState("");
  const [password, setPassword] = useState("");

  function handleclick() {
    let userData = {
      name: name,
      userhtml: imgSource,
    };
    console.log(userData);
    axios.post("/api/Newusers", { userData }).then((res) => {
      window.location.reload(false);
      console.log(res);
      console.log(res.data);
    });
    setName("");
    setimgSource("");
    // event.preventDefault();
  }

  return (
    <div className="createUserbox">
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
        </label>
      </form>
      <button type="submit" value="Submit" onClick={handleclick}>
        submit
      </button>
    </div>
  );
}

export default AddUser;
