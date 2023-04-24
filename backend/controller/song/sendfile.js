const path = require("path");
const fs = require("fs");
const song = require("../../db/model/songs");
async function sendfile(req, res, next) {
  try {
    var result = await song.findById(req.params.id);
    result.played = result.played + 1;
    result.save();
    req.body.filename = result.filename;
  } catch (err) {
    req.body.filename = "error";
  }
  sendSong(req, res, next);
}

function sendSong(req, res, next) {
  var file = path.join(
    __dirname,
    "..\\..\\assets\\music\\" + req.body.filename
  );
  if (!fs.existsSync(file))
    file = path.join(__dirname, "..\\..\\assets\\music\\error.mp3");
  var stat = fs.statSync(file);
  var total = stat.size;
  if (req.headers.range) {
    var range = req.headers.range;
    var parts = range.replace(/bytes=/, "").split("-");
    var partialstart = parts[0];
    var partialend = parts[1];
    var start = parseInt(partialstart, 10);
    var end = partialend ? parseInt(partialend, 10) : total - 1;
    var chunksize = end - start + 1;
    var readStream = fs.createReadStream(file, { start: start, end: end });
    res.writeHead(206, {
      "Content-Range": "bytes " + start + "-" + end + "/" + total,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "audio/mpeg",
    });
    readStream.pipe(res);
  } else {
    console.log(total)
    res.writeHead(200, {
      "Content-Length": total,
      "Content-Type": "audio/mpeg",
    });
    fs.createReadStream(filePath).pipe(res);
  }
}

module.exports = sendfile;
