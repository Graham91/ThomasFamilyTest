import React, { useState } from "react";
import "./questionEditor.css";

function QuestionEditor(props) {
  const color3 = props.color3;
  const bordercolor3 = color3 + "border";
  return (
    <div>
      <input
        value={props.question}
        onChange={(e) => props.makequestion(e.target.value)}
      ></input>
      <div>
        A. <input value={props.answera}></input>
      </div>
      <div>
        B. <input value={props.answerb}></input>
      </div>
      <div>
        C. <input value={props.answerc}></input>
      </div>
      <div>
        D. <input value={props.answerd}></input>
      </div>
    </div>
  );
}

export default QuestionEditor;
