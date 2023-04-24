const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historyData = new Schema({
  user: { type: String, required: true },
  song: { type: String, required: true, unique: true },
  durationPlayed: { type: Number,required: true,default: 0}    
});

module.exports = mongoose.model("history", historyData);