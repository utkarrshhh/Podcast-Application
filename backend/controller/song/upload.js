const songs = require("../../db/model/songs");
async function upload(req, res, next) {
  var uploadData = {};
  uploadData.filename = req.files.file[0].filename;
  uploadData.name = req.body.name;
  uploadData.description = req.body.description;
  uploadData.author = req.body.author;
  uploadData.category = req.body.category;
  uploadData.user = req.body.userid;
  uploadData.thumbnail = req.files.thumbnail[0].filename;
  var songData = new songs(uploadData);
  await songData.save();
  res.redirect("back");
}
module.exports = upload;
