const { model, Schema } = require("mongoose");

const UserSchema = Schema({
  username: { type: String },
  password: String,
  email: String,
  firstName: String,
  lastName: String,
});

module.exports = model("User", UserSchema);
