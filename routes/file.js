const router = require("express").Router();
const sendfile = require("../controller/file/sendsong")
router.post("/duration",(req,res,next)=>{
   console.log(req.body)
   res.send("ok")
})
router.get("/test", async (req, res, next) => {
   req.body.filename = "test.mp3"
   sendfile(req,res,next)
})

router.get("/:id", async (req, res, next) => {
   console.log(req.params)
   req.body.filename = `${req.params.id}.mp3`
   sendfile(req,res,next)
})
module.exports = router;
