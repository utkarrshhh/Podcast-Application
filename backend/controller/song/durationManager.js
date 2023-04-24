const historyModel = require("../../db/model/history");
async function duration(req, res, next) {
  var durationResult = await historyModel.findOneAndUpdate(
    { user: req.body.userid, song: req.body.songid },
    { durationPlayed: req.body.current },
    { upsert: true, new: true }
  );
  durationResult.save();
  res.sendStatus(200);
}

module.exports = duration;
