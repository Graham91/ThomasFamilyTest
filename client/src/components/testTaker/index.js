import React, { useState } from "react";
import "./testTaker.css";

function TestTaker(props) {
  const [useoncechecked, setuseOncechecked] = useState(true);
  const [checkedobject, setcheckedobject] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
  });
  const changebox = (letter) => {
    // console.log(letter);
    // let newcheckedobject = { ...checkedobject };
    // newcheckedobject.a = false;
    // newcheckedobject.b = false;
    // newcheckedobject.c = false;
    // newcheckedobject.d = false;
    // newcheckedobject[letter] = true;
    // setcheckedobject(newcheckedobject);
    // let fo = { ...testquestions };
    // let la = selectquestion;
    // let birthday = fo[la];
    // birthday.correstAnswer = letter;
    // console.log("hi");
    // settestquestions(fo);
  };
  return (
    <div
      // className="testtakewhole"
      className={`testtakewhole ${props.show ? "" : "hide"}`}
    >
      <button onClick={props.back}>Back</button>
      <div className="testTake">
        <button>Submit</button>
        <div>Question: {}</div>
        <div>
          <input
            type="checkbox"
            // checked={checkedobject.a}
            value="a"
            // onChange={(e) => changebox(e.target.value)}
          />
          A.
          {/* {props.question.a} */}
        </div>
        <div>
          <input
            type="checkbox"
            // checked={checkedobject.a}
            value="b"
            // onChange={(e) => changebox(e.target.value)}
          />
          B.
          {/* {props.question.b} */}
        </div>
        <div>
          <input
            type="checkbox"
            // checked={checkedobject.a}
            value="c"
            // onChange={(e) => changebox(e.target.value)}
          />
          C.
          {/* {props.question.c} */}
        </div>
        <div>
          <input
            type="checkbox"
            // checked={checkedobject.a}
            value="d"
            // onChange={(e) => changebox(e.target.value)}
          />
          D.
          {/* {props.question.d} */}
        </div>
      </div>
    </div>
  );
}

export default TestTaker;
