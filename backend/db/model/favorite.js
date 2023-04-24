const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteData = new Schema({
  user: { type: String, required: true },
  song: { type: String, required: true, unique: true },   
});

module.exports = mongoose.model("favorite", favoriteData);