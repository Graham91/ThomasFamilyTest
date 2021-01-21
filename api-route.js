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

router.post("/Newusers", (req, res) => {
  const userinfo = req.body;
  console.log(userinfo);
  let userData = {
    Name: userinfo.userData.name,
    imageURL: userinfo.userData.userhtml,
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
