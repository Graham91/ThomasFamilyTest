var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Testschema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  questions: [{}],
});

// This creates our model from the above schema, using mongoose's model method
var Test = mongoose.model("test", Testschema);

module.exports = Test;
