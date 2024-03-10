const favsongs = require("../../db/model/favorite");
const songs = require("../../db/model/songs");
const path = require("path");
const { getVideoDurationInSeconds } = require("get-video-duration");
const { getAudioDurationInSeconds } = require("get-audio-duration");
async function sendUserSearch(req, res, next) {
  try {
    var searchData = await favsongs.find({ user: req.params.id });
    console.log(searchData);
    var resData = [];
    for (let i = 0; i < searchData.length; i++) {
      const songid = searchData[i];
      var element = await songs.findById(songid.song);
      var tempData = {};
      tempData.id = element._id;
      tempData.name = element.name;
      tempData.description = element.description;
      tempData.author = element.author;
      tempData.category = element.category;
      if (element.category === "video") {
        var filepath = path.join(
          __dirname,
          "../../assets/video/",
          element.filename
        );
        var duration = await getVideoDurationInSeconds(filepath);
        finaldur = `${parseInt(duration / 60)}:${Math.round(
          duration - parseInt(duration / 60) * 60
        )}`;
      } else {
        var filepath = path.join(
          __dirname,
          "../../assets/music/",
          element.filename
        );
        var duration = await getAudioDurationInSeconds(filepath);
        finaldur = `${parseInt(duration / 60)}:${Math.round(
          duration - parseInt(duration / 60) * 60
        )}`;
      }
      tempData.time = finaldur;
      tempData.thumbnail = "/file/thumbnail/" + element._id;
      if (element.category === "audio") {
        tempData.fileurl = "/file/audio/" + element._id;
      } else {
        tempData.fileurl = "/file/video/" + element._id;
      }
      try {
        var response = await favsongs.find({
          $and: [{ song: element.id }, { user: req.params.id }],
        });
        if (response.length != 0) {
          tempData.isfav = true;
        } else {
          tempData.isfav = false;
        }
      } catch (ex) {
        console.log(ex);
        tempData.isfav = false;
      }
      resData.push(tempData);
    }
    res.json(resData);
  } catch (ex) {
    err = {};
    err.code = 401;
    err.message = "Invalid Data";
    err.error = ex;
    err.from = "controller-song-sendfavourite";
    next(err);
  }
}
module.exports = sendUserSearch;
