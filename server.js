const express = require("express");
const path = require("path");
const app = express();
const apiRouter = require("./api-route");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use("/api", apiRouter);
// var db = require("./models/Book");

// Define API routes here
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/src/index.js"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
