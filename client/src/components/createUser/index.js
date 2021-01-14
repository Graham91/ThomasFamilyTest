import React, { useState } from "react";
import "./createUser.css";

function CreateUser(props) {
  const [addUserActive, setaddUserState] = useState(true);
  const [deleteUserActive, setdeleteUserState] = useState(false);
  const [editUserActive, editUserState] = useState(false);
  return (
    <div>
      <div className="locationDescription">
        <div
          className={`adduser ${addUserActive ? "colorselected" : ""}`}
          onClick={() => {
            setaddUserState(true);
            setdeleteUserState(false);
            editUserState(false);
          }}
        >
          Add
        </div>
        <div
          className={`deleteuser ${deleteUserActive ? "colorselected" : ""}`}
          onClick={() => {
            setaddUserState(false);
            setdeleteUserState(true);
            editUserState(false);
          }}
        >
          Delete
        </div>
        <div
          className={`edituser ${editUserActive ? "colorselected" : ""}`}
          onClick={() => {
            setaddUserState(false);
            setdeleteUserState(false);
            editUserState(true);
          }}
        >
          Edit
        </div>
      </div>
      <div className={`createUseerBlock ${addUserActive ? "" : "hide"}`}>
        Add User
      </div>
      <div className={`createUseerBlock ${deleteUserActive ? "" : "hide"}`}>
        Delete User
      </div>
      <div className={`createUseerBlock ${editUserActive ? "" : "hide"}`}>
        edit User
      </div>
    </div>
  );
}

export default CreateUser;
