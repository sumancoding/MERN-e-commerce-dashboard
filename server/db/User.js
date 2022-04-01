//Defining userSchema and model here

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("users", userSchema);
module.export = userModel;
