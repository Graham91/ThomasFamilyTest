import React, { useState, useEffect } from "react";
import "./Usersettings.css";
import axios from "axios";
function Usersettings(props) {
  const [checkedobject, setcheckedobject] = useState({
    unicorn: true,
    volcano: false,
  });
  const [runonce, setrunonce] = useState(true);
  useEffect(() => {
    if (props.lastpreference === "") {
    } else {
      if (runonce === true) {
        setcheckedobject(props.lastpreference);
        props.changepreference(props.lastpreference);
        setrunonce(false);
      }
    }
  });
  const changebox = (letter) => {
    console.log(letter);
    let newcheckedobject = { ...checkedobject };
    newcheckedobject.unicorn = false;
    newcheckedobject.volcano = false;
    newcheckedobject[letter] = true;
    console.log(newcheckedobject);
    setcheckedobject(newcheckedobject);
    props.changepreference(letter);
    axios.put("/api/updatepreference", {
      choice: letter,
      Name: props.personName,
    });
  };

  const color3 = props.color3;
  const bordercolor3 = color3 + "border";
  return (
    <div>
      <div className={`locationDescriptiongreen ${props.color1}`}>
        User Settings
      </div>
      <div className={`userpageblock ${bordercolor3}`}>
        <div>
          <input
            type="checkbox"
            checked={checkedobject.unicorn}
            value="unicorn"
            onChange={(e) => changebox(e.target.value)}
          />
          Unicorn
        </div>
        <div>
          <input
            type="checkbox"
            checked={checkedobject.volcano}
            value="volcano"
            onChange={(e) => changebox(e.target.value)}
          />
          Volcano
        </div>
      </div>
      ;
    </div>
  );
}

export default Usersettings;
