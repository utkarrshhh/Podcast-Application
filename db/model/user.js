const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registrationData = new Schema({
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  access: { type: Number,required: true }
});

module.exports = mongoose.model("users", registrationData);