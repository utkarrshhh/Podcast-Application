const songs = require("../../db/model/songs");
async function upload(req, res, next) {
  try {
    console.log(req.files.file);
    var uploadData = {};
    uploadData.filename = req.files.file[0].filename;
    uploadData.name = req.body.name;
    uploadData.description = req.body.description;
    uploadData.author = req.body.author;
    uploadData.category = req.body.category;
    uploadData.user = "vinit";
    uploadData.thumbnail = req.files.thumbnail[0].filename;
    var songData = new songs(uploadData);
    await songData.save();
    res.redirect("back");
  } catch (err) {
    err = {};
    err.code = 401;
    err.message = "Invalid Data";
    err.error = err;
    err.from = "controller-file-upload";
    next(err);
  }
}
module.exports = upload;
