import React, { useState, useEffect } from "react";
import YouWon from "../youWon";
import "./testTaker.css";

function TestTaker(props) {
  const [useoncechecked, setuseOncechecked] = useState(true);
  const [setinfo, setsetinfo] = useState(true);
  const [question, setquestion] = useState({
    question0: {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      correstAnswer: "",
    },
  });
  const [questionsArray, setquestionsArray] = useState(["question0"]);
  const [questionnumber, setquestionnumber] = useState(0);
  const [uncheck, setuncheck] = useState(true);
  const [selectedAnswer, setselectedAnswer] = useState("");
  const [checkedobject, setcheckedobject] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
  });
  useEffect(() => {
    if (setinfo === true) {
      if (props.questions === undefined) {
      } else {
        // setquestion(props.info);
        setquestionsArray(props.questionsArray);
        setquestion(props.questions[0]);
        setsetinfo(false);
      }
    } else {
    }
  });
  const changebox = (letter) => {
    console.log(letter);
    let newcheckedobject = { ...checkedobject };
    newcheckedobject.a = false;
    newcheckedobject.b = false;
    newcheckedobject.c = false;
    newcheckedobject.d = false;
    newcheckedobject[letter] = true;
    console.log(newcheckedobject);
    setcheckedobject(newcheckedobject);
    setuncheck(false);
  };
  const findchecked = () => {
    console.log(checkedobject);
    if (checkedobject.a === true) {
      return "a";
    }
    if (checkedobject.b === true) {
      return "b";
    }
    if (checkedobject.c === true) {
      return "c";
    }
    if (checkedobject.d === true) {
      return "d";
    }
  };
  const submitQuestion = () => {
    if (uncheck === false) {
      console.log(
        "box checked, selected answer: " +
          findchecked() +
          " The correct answer is: " +
          question[questionsArray[questionnumber]].correstAnswer
      );
      let newcheckedobject = { ...checkedobject };
      newcheckedobject.a = false;
      newcheckedobject.b = false;
      newcheckedobject.c = false;
      newcheckedobject.d = false;
      setcheckedobject(newcheckedobject);
      setuncheck(true);
      console.log(questionnumber);
      console.log(questionsArray.length - 1);
      if (questionnumber < questionsArray.length - 1) {
        setquestionnumber(questionnumber + 1);
      } else {
        setquestionnumber(0);
      }
    } else {
      console.log("box unchecked");
    }
  };
  return (
    <div>
      <YouWon />
      <div
        // className="testtakewhole"
        className={`testtakewhole ${props.show ? "" : "hide"}`}
      >
        <button onClick={props.back}>Back</button>
        <div className="testTake">
          <button onClick={submitQuestion}>Submit</button>
          <div>{question[questionsArray[questionnumber]].question}</div>
          <div>
            <input
              type="checkbox"
              checked={checkedobject.a}
              value="a"
              onChange={(e) => changebox(e.target.value)}
            />
            A.
            {question[questionsArray[questionnumber]].a}
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkedobject.b}
              value="b"
              onChange={(e) => changebox(e.target.value)}
            />
            B.
            {question[questionsArray[questionnumber]].b}
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkedobject.c}
              value="c"
              onChange={(e) => changebox(e.target.value)}
            />
            C.
            {question[questionsArray[questionnumber]].c}
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkedobject.d}
              value="d"
              onChange={(e) => changebox(e.target.value)}
            />
            D.
            {question[questionsArray[questionnumber]].d}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestTaker;
