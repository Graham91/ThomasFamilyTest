const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const dataBase = "mongodb://localhost/thomasFamilyTest";
mongoose
  .connect(dataBase, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then((result) =>
    app.listen(PORT, () => {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
    })
  )
  .catch((err) => console.log(err));

// var db = require("./models/Book");
// Define API routes here
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/src/index.js"));
});
