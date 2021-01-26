import React, { useState } from "react";
import "./edittest.css";
import Editor1 from "../formeditor";

function Edittest(props) {
  return (
    <div>
      <div className="locationDescription">edit Test Description</div>
      <div className="createUseerBlock">Edit test</div>;
      <Editor1 />
    </div>
  );
}

export default Edittest;
