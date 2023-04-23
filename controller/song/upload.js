const songs = require("../../db/model/songs")
async function upload(req,res,next){
    var uploadData = {}
    uploadData.filename = req.file.filename
    uploadData.name = req.body.name
    uploadData.description = req.body.description
    uploadData.author = req.body.author
    uploadData.category = req.body.category
    uploadData.user = "vinit"
    var songData = new songs(uploadData)
    await songData.save()
}
module.exports = upload