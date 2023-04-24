const favourite = require("../../db/model/favorite");

async function setFavourite(req,res,next){
    try{
    var favoriteData = new favourite(req.body)
        favoriteData.save()
        res.sendStatus(200)
    }catch(ex){
        err = {};
    err.code = 401;
    err.message = "Duplicate Data";
    err.error = ex;
    err.from = "controller-song-setfavourite";
    next(err);
    }
}
module.exports = setFavourite