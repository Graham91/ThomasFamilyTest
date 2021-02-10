var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
  monkeyPoints: {
    type: Number,
    default: 0,
  },
  profileSettings: {
    type: String,
    default: "unicorn",
  },
  tests: [{}],
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("user", UserSchema);

module.exports = User;
