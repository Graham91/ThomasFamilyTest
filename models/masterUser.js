var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var InprogressSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  questions: [{}],
});

// This creates our model from the above schema, using mongoose's model method
var InProgress = mongoose.model("test", InprogressSchema);

module.exports = InProgress;
