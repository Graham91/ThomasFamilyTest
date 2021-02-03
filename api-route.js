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
