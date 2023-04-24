const song = require("../../db/model/songs");
const fs = require("fs");
const path = require("path")
async function sendThumbnailFile(req, res, next) {
  var songData = await song.findById(req.params.id);
  if (songData.category === "video") {
    var file = path.join(
        __dirname,
        "..\\..\\assets\\video\\" + songData.thumbnail
      );
    fs.readFile(file, function (err, content) {
      // Serving the image
      res.end(content);
    });
  }else{
    var file = path.join(
        __dirname,
        "..\\..\\assets\\music\\" + songData.thumbnail
      );
      console.log(file)
    fs.readFile(file, function (err, content) {
      // Serving the image
      res.send(content);
    });
  }
}
module.exports = sendThumbnailFile;
