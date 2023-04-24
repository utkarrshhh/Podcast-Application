const router = require("express").Router()
const login = require("../controller/auth/login")
const register = require("../controller/auth/register")
router.post("/login",login)
router.post("/register",register)


//error handelling middleware
const error = require("../middleware/error") 
router.use("*",(req,res,next)=>{
    var err = {}
    err.code = 404
    err.message = "URL Not Found"
    next(err)
})
router.use(error.error)
module.exports = router