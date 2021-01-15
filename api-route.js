const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const db = require("../models");
const db = require("./models/index");
const PORT = process.env.PORT || 3001;
const app = express();

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

router.post("/Newusers", (req, res) => {
  const userData = req.body;
  console.log(userData);

  //   db.User.create(userData)
  //     .then((whatHappened) => {
  //       res.status(200).json({ status: 200, data: whatHappened });
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       res
  //         .status(418)
  //         .json({ status: 418, message: "arent you late for something?" });
  //     });
});

module.exports = router;
