const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songData = new Schema({
  name: { type: String, required: true },
  filename: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  user: { type: String, required: true },
  played: { type: Number, default: 0 },
});

module.exports = mongoose.model("songs", songData);
