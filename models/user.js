var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  monkeyPoints: {
    type: Number,
    default: 0,
  },
  tests: [{}],
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("user", Userschema);

module.exports = User;
