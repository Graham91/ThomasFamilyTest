import React, { useState, useEffect } from "react";
import "./EditModule.css";

function EditModule(props) {
  const [name, setName] = useState("");
  const [imgSource, setimgSource] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    setName(props.user);
    setimgSource(props.imgurl);
  });

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
          </label>
        </form>
      </div>
    </div>
  );
}

export default EditModule;
