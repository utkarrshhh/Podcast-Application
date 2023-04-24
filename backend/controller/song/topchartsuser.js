const songModel = require("../../db/model/songs");
const favsongs = require("../../db/model/favorite");
const path = require("path")
const { getVideoDurationInSeconds } = require('get-video-duration')
const { getAudioDurationInSeconds } = require('get-audio-duration')
async function getTop(req, res, next) {
  var sortedSongData = await songModel.find().sort({ played: -1 }).limit(10);
  var resData = [];
  for (let i = 0; i < sortedSongData.length; i++) {
    const element = sortedSongData[i];
    var tempData = {};
    tempData.id = element._id;
    tempData.name = element.name;
    tempData.description = element.description;
    tempData.author = element.author;
    tempData.category = element.category;
    tempData.thumbnail = "http://134.209.153.161:5000/file/thumbnail/" + element._id;
    if (element.category === "audio") {
      tempData.fileurl = "http://134.209.153.161:5000/file/audio/" + element._id;
    } else {
      tempData.fileurl = "http://134.209.153.161:5000/file/video/" + element._id;
    }
    if(element.category === "video"){
        var filepath = path.join(__dirname,"../../assets/video/",element.filename)
        var duration = await getVideoDurationInSeconds(filepath)
        finaldur = `${parseInt(duration/60)}:${Math.round(duration-(parseInt(duration/60)*60))}`
      }else{
        var filepath = path.join(__dirname,"../../assets/music/",element.filename)
        var duration = await getAudioDurationInSeconds(filepath)
        finaldur = `${parseInt(duration/60)}:${Math.round(duration-(parseInt(duration/60)*60))}`
      }
      tempData.time = finaldur
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
}
module.exports = getTop;
