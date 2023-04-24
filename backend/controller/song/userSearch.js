const songs = require("../../db/model/songs");
const favourite = require("../../db/model/favorite");
async function sendUserSearch(req, res, next) {
  try {
    var searchData = await songs.find({ user: req.params.id });
    var resData = [];
    for (let i = 0; i < searchData.length; i++) {
      const element = searchData[i];
      var tempData = {};
      tempData.id = element._id;
      tempData.name = element.name;
      tempData.description = element.description;
      tempData.author = element.author;
      tempData.category = element.category;
      tempData.thumbnail = "/file/thumbnail/" + element._id;
      if (element.category === "audio") {
        tempData.fileurl = "/file/audio/" + element._id;
      } else {
        tempData.fileurl = "/file/video/" + element._id;
      }
      try {
        var response = await favourite.find({
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
    err.from = "controller-song-userSearch";
    next(err);
  }
}
module.exports = sendUserSearch;
