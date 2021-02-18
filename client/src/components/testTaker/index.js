import React, { useState, useEffect } from "react";
import "./testTaker.css";
import axios from "axios";

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
      answered: "unanswered",
    },
  });
  const [questionsArray, setquestionsArray] = useState(["question0"]);
  const [questionnumber, setquestionnumber] = useState(0);
  const [uncheck, setuncheck] = useState(true);
  const [selectedAnswer, setselectedAnswer] = useState("");
  const [availableArray, setavailableArray] = useState(["unanswered"]);
  const [navigationArray, setnavigationArray] = useState([0]);
  const [runcorrectonce, setruncorrectonce] = useState(true);
  const [checkedobject, setcheckedobject] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
  });
  useEffect(() => {
    if (runcorrectonce === true) {
      getcorrectinformation(props.questionsArray);
    }
    if (setinfo === true) {
      if (props.questions === undefined) {
      } else {
        // setquestion(props.info);
        setquestionsArray(props.questionsArray);
        setquestion(props.questions);
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
  const submitAxios = (info) => {
    axios.put("/api/updatequestion", { info });
  };
  const getcorrectinformation = (array) => {
    let correctArray = [];
    let navigationArray = [];

    if (questionsArray.length === availableArray.length) {
    } else {
      questionsArray.forEach((element, index) => {
        let questionstate = question[element].answered;
        correctArray.push(questionstate);
        if (questionstate === "correct") {
        } else {
          navigationArray.push(index);
        }
      });
      setnavigationArray(navigationArray);
      setavailableArray(correctArray);
      setruncorrectonce(false);
      // closewhencompleted(correctArray);
    }
  };

  const submitQuestion = () => {
    if (uncheck === false) {
      let updateobject = {
        testName: props.name,
        question: questionsArray[navigationArray[questionnumber]],
        answered: "",
        personName: props.personName,
      };
      let questionavailbleArray = [...availableArray];
      console.log(updateobject);
      if (
        findchecked() ===
        question[questionsArray[navigationArray[questionnumber]]].correstAnswer
      ) {
        questionavailbleArray[navigationArray[questionnumber]] = "correct";
        console.log("correct answer selected");
        updateobject.answered = "correct";
        let monkeypoints = props.monkeypoints;
        monkeypoints++;
        props.updateMonkeyPoints(monkeypoints);
        submitAxios(updateobject);
        props.changemonkey();
        props.showyouwon();
        setavailableArray(questionavailbleArray);
        // closewhencompleted(questionavailbleArray);
      } else {
        updateobject.answered = "incorrect";
        questionavailbleArray[navigationArray[questionnumber]] = "incorrect";
        submitAxios(updateobject);
        props.showyoulost();
        console.log("incorrect answer selected");
        setavailableArray(questionavailbleArray);
        // closewhencompleted(questionavailbleArray);
      }

      let newcheckedobject = { ...checkedobject };
      newcheckedobject.a = false;
      newcheckedobject.b = false;
      newcheckedobject.c = false;
      newcheckedobject.d = false;
      setcheckedobject(newcheckedobject);
      setuncheck(true);
      changequestion(questionavailbleArray);
    } else {
      console.log("box unchecked");
    }
  };
  const changequestion = (correctArray) => {
    if (questionnumber < navigationArray.length - 1) {
      setquestionnumber(questionnumber + 1);
      console.log(questionnumber);
    } else {
      let correctanswers = 0;
      let info = { testname: props.name, personName: props.personName };
      for (let index = 0; index < correctArray.length; index++) {
        console.log(correctArray[index]);
        console.log(questionsArray);
        if (correctArray[index] === "correct") {
          correctanswers++;
        }
      }
      if (correctanswers === questionsArray.length) {
        axios.put("/api/updatetest", { info });
      }
      setquestionnumber(0);
      setquestion({
        question0: {
          question: "",
          a: "",
          b: "",
          c: "",
          d: "",
          correstAnswer: "",
          answered: "unanswered",
        },
      });
      setquestionsArray(["question0"]);
      setnavigationArray([0]);
      setsetinfo(true);
      props.back();
    }
  };
  return (
    <div>
      <div className={`testtakewhole ${props.show ? "" : "hide"}`}>
        <button onClick={props.back}>Back</button>
        <div className="testTake">
          <button onClick={submitQuestion}>Submit</button>
          <div>
            {question[questionsArray[navigationArray[questionnumber]]].question}
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkedobject.a}
              value="a"
              onChange={(e) => changebox(e.target.value)}
            />
            A.
            {question[questionsArray[navigationArray[questionnumber]]].a}
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkedobject.b}
              value="b"
              onChange={(e) => changebox(e.target.value)}
            />
            B.
            {question[questionsArray[navigationArray[questionnumber]]].b}
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkedobject.c}
              value="c"
              onChange={(e) => changebox(e.target.value)}
            />
            C.
            {question[questionsArray[navigationArray[questionnumber]]].c}
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkedobject.d}
              value="d"
              onChange={(e) => changebox(e.target.value)}
            />
            D.
            {question[questionsArray[navigationArray[questionnumber]]].d}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestTaker;
