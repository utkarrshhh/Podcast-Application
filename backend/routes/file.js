const router = require("express").Router();
const sendfile = require("../controller/song/sendfile");
const sendVideoFile = require("../controller/song/sendVideoFile");
const sendThumbnailFile = require("../controller/song/sendThumbnailFile");
const upload = require("../controller/song/upload");
const duration = require("../controller/song/durationManager")
const topcharts = require("../controller/song/topcharts")
const search = require("../controller/song/search")
const userSearch = require("../controller/song/userSearch")
const multer = require("multer");
const Path = require("path");
const { v4: uuidv4 } = require("uuid");
const formDataMiddleware = require("express").urlencoded({ extended: false });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (req.body.category === "audio") {
      cb(null, Path.join(__dirname, "../assets/music"));
    } else {
      cb(null, Path.join(__dirname, "../assets/video"));
    }
  },
  filename: function (req, file, cb) {
    var filename = uuidv4() + "." + file.originalname.split(".").pop();
    cb(null, filename);
  },
});
const uploadMulter = multer({ storage: storage });


router.post("/duration", duration);
router.post("/upload", formDataMiddleware, uploadMulter.fields([{name:'file',maxCount:1},{name:'thumbnail',maxCount:1}]), upload);

router.get("/audio/:id", sendfile);
router.get("/video/:id", sendVideoFile);
router.get("/thumbnail/:id", sendThumbnailFile);
router.get("/topcharts",topcharts)
router.get("/user/:id",userSearch)
//router.get("/search/:name",search)


const error = require("../middleware/error") 
router.use("*",(req,res,next)=>{
    var err = {}
    err.code = 404
    err.message = "URL Not Found"
    next(err)
})
router.use(error.error)
module.exports = router;
