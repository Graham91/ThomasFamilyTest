var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Testschema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  User: {
    type: String,
    required: true,
  },
  Submited: {
    type: Boolean,
    required: true,
  },
  questions: [{}],
  questionsArray: [],
});

// This creates our model from the above schema, using mongoose's model method
var Test = mongoose.model("Test", Testschema);

module.exports = Test;
