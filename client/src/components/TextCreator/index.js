import React, { useState, useEffect } from "react";
import "./testcreator.css";

let questioncounter = 0;
function TestCreator(props) {
  const [testquestions, settestquestions] = useState({});
  const [testNavigationArray, settestNavigationArray] = useState([]);

  useEffect(() => {
    // settestquestions({
    //   [props.userInfo[0].Name]: {},
    //   //   [props.userInfo[0].Name]: {},
    //   //   [props.userInfo[2].Name]: {},
    //   //   [props.userInfo[1].Name]: {},
    // });
  });

  const addNewQuestion = () => {
    console.log("worked");
    let questionnumber = "question" + questioncounter;
    settestquestions({
      ...testquestions,
      [questionnumber]: {
        question: "question",
        number: questionnumber,
      },
    });
    settestNavigationArray([...testNavigationArray, questionnumber]);
    questioncounter++;
  };

  return (
    <div className={`testCreator ${props.classFinder ? "" : "hide"}`}>
      <button onClick={props.back}>back</button>

      <div className="testQuestionNavigation"></div>
      <div className="testQuestionCreator">
        test for {props.selecteduser}
        <button onClick={addNewQuestion}>addNewQuestion</button>
      </div>
    </div>
  );
}

export default TestCreator;
