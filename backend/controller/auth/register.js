const Schema = require("../../db/model/user")
async function register(req,res,next){
    try {
      const registrationData = new Schema(req.body);
      await registrationData.save();
      res.send("Ok");
    } catch (ex) {
      err = {};
      err.code = 400;
      err.message = "Database Error";
      err.error = ex
      err.from = "controller-auth-register"
      next(err);
    }
}
module.exports = register