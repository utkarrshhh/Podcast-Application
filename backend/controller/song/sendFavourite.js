const favsongs = require("../../db/model/favorite")
const songs = require("../../db/model/songs")
async function sendUserSearch(req, res, next) {
  try {
    var searchData = await favsongs.find({user:req.params.id})
    console.log(searchData)
    var resData = []
    for (let i = 0; i < searchData.length; i++) {
        const songid = searchData[i];
        var element = await songs.findById(songid.song)
        var tempData = {}
        tempData.id = element._id
        tempData.name = element.name
        tempData.description = element.description
        tempData.author = element.author
        tempData.category = element.category
        tempData.thumbnail = "/file/thumbnail/"+element._id
        if(element.category === "audio"){
            tempData.fileurl = "/file/audio/"+element._id
        }else{
            tempData.fileurl = "/file/video/"+element._id
        }
        resData.push(tempData)
    }
    res.json(resData)
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
