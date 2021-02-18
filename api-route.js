const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const db = require("../models");
const db = require("./models/index");

const dataBase = "mongodb://localhost/thomasFamilyTest";

// let MONGODB_URI = process.env.NODE_ENV ? process.env.MONGODB_URI : dataBase;

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose
  .connect(dataBase, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(console.log("mongoose running"))
  .catch((err) => console.log(err));

router.get("/", (req, res) => {
  res.end("we should never come here.");
});
router.get("/users", (req, res) => {
  db.User.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
        message: err.message,
      });
    });
});
router.get("/findUser/:id", (req, res) => {
  let user = req.params.id;
  db.User.find({ Name: user })
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
        message: err.message,
      });
    });
});
router.get("/singleTest/:id", (req, res) => {
  let test = req.params.id;
  db.Test.find({ Name: test })
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
        message: err.message,
      });
    });
});
router.post("/Newusers", (req, res) => {
  const userinfo = req.body;
  console.log(userinfo);
  let userData = {
    Name: userinfo.userData.name,
    imageURL: userinfo.userData.userhtml,
    password: userinfo.userData.password,
    monkeyPoints: 0,
    tests: [],
  };
  console.log(userData);
  db.User.create(userData)
    .then((res) => {
      res.status(200).json({ status: 200, data: res });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(418)
        .json({ status: 418, message: "arent you late for something?" });
    });
});
router.put("/updatetest", (req, res) => {
  const userinfo = req.body;
  let testname = userinfo.info.testname;
  let personname = userinfo.info.personName;
  console.log(userinfo);
  db.User.find({ Name: personname }).then((data) => {
    let testArray2 = data[0].tests;
    let testArray = [...testArray2];
    let objIndex = testArray.findIndex(
      (element) => element.testName == testname
    );
    console.log(objIndex);
    console.log(testArray);
    testArray[objIndex].testState = "completed";
    console.log(testArray);
    db.User.updateOne({ Name: personname }, { tests: testArray }).then(
      (response) => {
        console.log(response);
      }
    );
  });
});
router.put("/updatepreference", (req, res) => {
  const userinfo = req.body;
  let choice = userinfo.choice;
  let person = userinfo.Name;
  console.log(userinfo);
  db.User.updateOne({ Name: person }, { profileSettings: choice }).catch(
    (err) => {
      console.log(err);
    }
  );
});
router.put("/updatequestion", (req, res) => {
  const userinfo = req.body;
  const userName = userinfo.info.testName;
  const answered = userinfo.info.answered;
  const questionNumber = userinfo.info.question;
  const user = userinfo.info.personName;
  console.log(userinfo);
  console.log(userName);

  db.User.find({ Name: user }).then((data) => {
    let testArray2 = data[0].tests;
    let monkeyPoints = parseInt(data[0].monkeyPoints);
    if (answered === "correct") {
      monkeyPoints++;
    }
    let testArray = [...testArray2];
    let objIndex = testArray.findIndex(
      (element) => element.testName == userName
    );
    console.log(objIndex);
    console.log(testArray);
    testArray[objIndex].testState = "unfinshed";
    console.log(testArray);
    db.User.updateOne(
      { Name: user },
      { tests: testArray, monkeyPoints: monkeyPoints }
    ).then((response) => {
      console.log(response);
    });
  });

  db.Test.find({ Name: userName }, function (err, docs) {
    console.log(docs);
    let questions = docs[0].questions;
    questions[questionNumber].answered = answered;
    db.Test.updateOne(
      { Name: userName },
      {
        questions: questions,
      }
    ).then((response) => {
      res.send(response);
    });
  });
});

router.put("/updateuser", (req, res) => {
  const userinfo = req.body;
  const userName = userinfo.name;

  db.User.updateOne(
    { name: userName },
    {
      imageURL: userinfo.userData.userhtml,
      password: userinfo.userData.password,
    }
  ).catch((err) => {
    console.log(err.message);
    res
      .status(418)
      .json({ status: 418, message: "arent you late for something?" });
  });
});
router.post("/savetest", (req, res) => {
  const testInfo = req.body.testInfo;
  console.log(testInfo);
  const newtest = {
    Name: testInfo.Name,
    User: testInfo.User,
    Submited: testInfo.Submited,
    questions: testInfo.questions,
    questionsArray: testInfo.questionsArray,
  };
  console.log(newtest);
  db.Test.find({ Name: testInfo.Name }, function (err, docs) {
    if (!docs.length) {
      db.Test.create(newtest)
        .then((res) => {
          res.send("success");
        })
        .catch((err) => {
          console.log(err.message);
          res.send("err");
        });
    } else {
      db.Test.updateOne(
        { Name: testInfo.Name },
        {
          questions: testInfo.questions,
          questionsArray: testInfo.questionsArray,
        }
      ).catch((err) => {
        console.log(err.message);
        res
          .status(418)
          .json({ status: 418, message: "arent you late for something?" });
      });
    }
  });
});
router.post("/submittest", (req, res) => {
  const testInfo = req.body.testInfo;
  console.log(testInfo);
  const newtest = {
    Name: testInfo.Name,
    User: testInfo.User,
    Submited: testInfo.Submited,
    questions: testInfo.questions,
    questionsArray: testInfo.questionsArray,
  };
  // console.log(newtest);
  db.User.find({ Name: testInfo.User }).then((data) => {
    let testarray = data[0].tests;
    testarray.push({ testState: "new", testName: testInfo.Name });
    db.User.updateOne({ Name: testInfo.User }, { tests: testarray })
      .then(() => {
        console.log("User Test Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  });
  db.Test.find({ Name: testInfo.Name }, function (err, docs) {
    if (!docs.length) {
      db.Test.create(newtest)
        .then((res) => {
          res.send("success");
        })
        .catch((err) => {
          console.log(err.message);
          res.send("err");
        });
    } else {
      db.Test.updateOne(
        { Name: testInfo.Name },
        {
          Submited: testInfo.Submited,
          questions: testInfo.questions,
          questionsArray: testInfo.questionsArray,
        }
      ).catch((err) => {
        console.log(err.message);
        res.status(418).json({ status: 418, message: "Error" });
      });
    }
  });
});
router.get("/savedtests", (req, res) => {
  db.Test.find({ Submited: false })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
        message: err.message,
      });
    });
});
router.put("/deleteuser", (req, res) => {
  const userinfo = req.body;
  console.log(userinfo);
  userinfo.name;
  db.User.deleteOne({ Name: userinfo.name }, function (err) {
    if (!err) {
      console.log("success");
      res.send("success");
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
