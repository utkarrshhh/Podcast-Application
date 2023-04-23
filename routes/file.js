const router = require("express").Router();
const sendfile = require("../controller/song/sendfile");
const sendVideoFile = require("../controller/song/sendVideoFile");
const upload = require("../controller/song/upload");
const multer = require("multer");
const Path = require("path");
const { v4: uuidv4 } = require("uuid");
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

router.post("/duration", (req, res, next) => {
  console.log(req.body);
  res.send("ok");
});
const formDataMiddleware = require("express").urlencoded({ extended: false });
router.post("/upload", formDataMiddleware, uploadMulter.single("file"), upload);
router.get("/audio/:id", sendfile);
router.get("/video/:id", sendVideoFile);
module.exports = router;
