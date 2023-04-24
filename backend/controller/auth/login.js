const userSchema = require("../../db/model/user")
const jwt = require("jsonwebtoken");
async function login(req,res,next){
    try {
        const loginData = req.body
        var userResult = await userSchema.find({email:loginData.email})
        if(result[0].password === loginData.password){
            var resData = {}
            var token = jwt.sign({id:result[0]._id,access:result[0].access},process.env.jwtKey)
            resData.token = token
            resData.userid = userResult[0]._id
            return res.json(resData)
        }
        throw "Invalid Credentials"
      } catch (ex) {
        err = {};
        err.code = 401
        err.message = "Invalid Credentials"
        err.error = ex
        err.from = "controller-auth-login"
        next(err);
      }
}
module.exports = login