const song = require("../../db/model/songs")
async function sendSearchData(req,res,next){
    try{
        var searchData = await song.findOne({"name":{$regex : req.params.id}})
    }catch(ex){
        err = {};
        err.code = 401;
        err.message = "Invalid Data";
        err.error = ex;
        err.from = "controller-song-search";
        next(err);
    }
}
module.exports = sendSearchData