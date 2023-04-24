function error(err,req,res,next){
    console.log(err)
    res.status(err.code)
    res.send(err.message)
}
exports.error = error