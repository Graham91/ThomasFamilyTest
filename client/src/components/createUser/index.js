import React, { useState } from "react";
import "./createUser.css";
import AddUser from "../Userfolders/Add User";
import DeleteUser from "../Userfolders/deleteUser";

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
      <div className={`createUserBlock ${addUserActive ? "" : "hide"}`}>
        <AddUser />
      </div>
      <div className={`createUserBlock ${deleteUserActive ? "" : "hide"}`}>
        <DeleteUser userinfo={props.userInfo} />
      </div>
      <div className={`createUserBlock ${editUserActive ? "" : "hide"}`}>
        edit User
      </div>
    </div>
  );
}

export default CreateUser;
