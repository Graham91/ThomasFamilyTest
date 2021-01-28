import React, { useState, useEffect } from "react";
import "./testcreator.css";
import QuestionEditor from "../questionEditor";
let questioncounter = 1;

function TestCreator(props) {
  const [testquestions, settestquestions] = useState({
    question0: {
      question: "2+2",
      a: "",
      b: "",
      c: "",
      d: "",
      correstAnswer: "",
    },
  });
  const [testNavigationArray, settestNavigationArray] = useState(["question0"]);
  const [selectquestion, setselectquestion] = useState("question0");

  const addNewQuestion = () => {
    console.log("worked");
    let questionnumber = "question" + questioncounter;
    settestquestions({
      ...testquestions,
      [questionnumber]: {
        question: "question1",
        a: "",
        b: "",
        c: "",
        d: "",
        correstAnswer: "",
      },
    });
    settestNavigationArray([...testNavigationArray, questionnumber]);
    // props.update(props.selecteduser, testquestions, testNavigationArray);
    questioncounter++;
  };
  const selected = (e) => {
    e.preventDefault();
    let val = e.target.getAttribute("value");
    setselectquestion(val);
  };
  const back = () => {
    props.back();
    // setuseOnce(true);
    settestquestions({});
    settestNavigationArray([]);
  };
  const updatequestion = (value, location) => {
    // console.log(value);
    let fo = { ...testquestions };
    let la = selectquestion;
    let birthday = fo[la];
    birthday[location] = value;

    settestquestions(fo); //   ...testquestions,
  };

  return (
    <div className={`testCreator ${props.classFinder ? "" : "hide"}`}>
      <button onClick={back}>back</button>
      <div className="testQuestionNavigation">
        {testNavigationArray.map((person, index) => (
          <div
            className="questionIndex"
            onClick={selected}
            value={person}
            key={index}
          >
            {person}
          </div>
        ))}
      </div>
      <div className="testQuestionCreator">
        test for {props.selecteduser}
        <button onClick={addNewQuestion}>addNewQuestion</button>
        <div>
          <input
            value={testquestions[selectquestion].question}
            onChange={(e) => updatequestion(e.target.value, "question")}
          ></input>
          <div>
            A.{" "}
            <input
              value={testquestions[selectquestion].a}
              onChange={(e) => updatequestion(e.target.value, "a")}
            ></input>
          </div>
          <div>
            B.{" "}
            <input
              value={testquestions[selectquestion].b}
              onChange={(e) => updatequestion(e.target.value, "b")}
            ></input>
          </div>
          <div>
            C.{" "}
            <input
              value={testquestions[selectquestion].c}
              onChange={(e) => updatequestion(e.target.value, "c")}
            ></input>
          </div>
          <div>
            D.{" "}
            <input
              value={testquestions[selectquestion].d}
              onChange={(e) => updatequestion(e.target.value, "d")}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCreator;
