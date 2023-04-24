const songModel = require("../../db/model/songs")
async function getTop(req,res,next){
    var sortedSongData = await songModel.find().sort({played:-1}).limit(10);
    var resData = []
    for (let i = 0; i < sortedSongData.length; i++) {
        const element = sortedSongData[i];
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
}
module.exports = getTop