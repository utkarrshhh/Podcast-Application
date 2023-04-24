const favourite = require("../../db/model/favorite");

async function setFavourite(req,res,next){
    try{
        var response = await favourite.find({
            $and: [{ song: req.body.son }, { user: req.body.user }],
          });
          if(response.length === 0){
            var favoriteData = new favourite(req.body)
            favoriteData.save()
          }else{
            await favourite.deleteOne({
                $and: [{ song: req.body.son }, { user: req.body.user }],
              })
          }
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