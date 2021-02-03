import React, { useState, useEffect } from "react";
import "./testcreator.css";
import axios from "axios";
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
  const [useonce, setuseOnce] = useState(true);
  const [useoncechecked, setuseOncechecked] = useState(true);
  const [checkedobject, setcheckedobject] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
  });

  useEffect(() => {
    if (props.userselected === true) {
      if (useonce === true) {
        settestquestions(props.selectquestions);
        settestNavigationArray(props.selectedArray);
        updateselected(selectquestion);
        setuseOnce(false);
      }
    } else {
      if (useoncechecked === true) {
        updateselected(selectquestion);
        setuseOncechecked(false);
      }
    }
  });

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
    updateselected(val);
  };
  const updateselected = (questionnumber) => {
    let correct = testquestions[questionnumber].correstAnswer;
    if (correct === "") {
      let newcheckedobject = { ...checkedobject };
      newcheckedobject.a = false;
      newcheckedobject.b = false;
      newcheckedobject.c = false;
      newcheckedobject.d = false;
      setcheckedobject(newcheckedobject);
    } else {
      let newcheckedobject = { ...checkedobject };
      newcheckedobject.a = false;
      newcheckedobject.b = false;
      newcheckedobject.c = false;
      newcheckedobject.d = false;
      newcheckedobject[correct] = true;
      setcheckedobject(newcheckedobject);
    }
  };
  const back = () => {
    props.back();
    // setuseOnce(true);
    questioncounter = 1;
    setselectquestion("question0");
    settestquestions({
      question0: {
        question: "2+2",
        a: "",
        b: "",
        c: "",
        d: "",
        correstAnswer: "",
      },
    });
    settestNavigationArray(["question0"]);
    setuseOnce(true);
  };
  const saveInformation = () => {
    const testInfo = {
      Name: props.testName,
      User: props.selecteduser,
      Submited: false,
      questions: testquestions,
      questionsArray: testNavigationArray,
    };
    axios.post("/api/savetest", { testInfo }).then((res) => {
      // window.location.reload(false);
      console.log(res);
      console.log(res.data);
    });
  };
  const changebox = (letter) => {
    console.log(letter);
    let newcheckedobject = { ...checkedobject };
    newcheckedobject.a = false;
    newcheckedobject.b = false;
    newcheckedobject.c = false;
    newcheckedobject.d = false;
    newcheckedobject[letter] = true;
    setcheckedobject(newcheckedobject);
    let fo = { ...testquestions };
    let la = selectquestion;
    let birthday = fo[la];
    birthday.correstAnswer = letter;
    console.log("hi");
    settestquestions(fo);
  };
  const submitInformation = () => {
    const testInfo = {
      Name: props.testName,
      User: props.selecteduser,
      Submited: true,
      questions: testquestions,
      questionsArray: testNavigationArray,
    };
    axios.post("/api/submittest", { testInfo }).then((res) => {
      // window.location.reload(false);
      console.log(res);
      console.log(res.data);
    });
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
        <h1>Test for {props.selecteduser}</h1>
        <h2>Test Name: {props.testName}</h2>
        <button onClick={addNewQuestion}>addNewQuestion</button>
        <div>
          <input
            value={testquestions[selectquestion].question}
            onChange={(e) => updatequestion(e.target.value, "question")}
          ></input>
          <div>
            <input
              type="checkbox"
              checked={checkedobject.a}
              value="a"
              onChange={(e) => changebox(e.target.value)}
            />
            A.{" "}
            <input
              value={testquestions[selectquestion].a}
              onChange={(e) => updatequestion(e.target.value, "a")}
            ></input>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkedobject.b}
              onChange={(e) => changebox(e.target.value)}
              value="b"
            />
            B.{" "}
            <input
              value={testquestions[selectquestion].b}
              onChange={(e) => updatequestion(e.target.value, "b")}
            ></input>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkedobject.c}
              onChange={(e) => changebox(e.target.value)}
              value="c"
            />
            C.{" "}
            <input
              value={testquestions[selectquestion].c}
              onChange={(e) => updatequestion(e.target.value, "c")}
            ></input>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkedobject.d}
              onChange={(e) => changebox(e.target.value)}
              value="d"
            />
            D.{" "}
            <input
              value={testquestions[selectquestion].d}
              onChange={(e) => updatequestion(e.target.value, "d")}
            ></input>
          </div>
        </div>
        <button onClick={saveInformation}>Save</button>
        <button onClick={submitInformation}>Submit</button>
      </div>
    </div>
  );
}

export default TestCreator;
