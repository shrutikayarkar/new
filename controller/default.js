var express = require("express");
var router = express.Router();

router.use("/",require("./home"));
router.use("/add",require("./addstudent"));
router.use("/view",require("./viewstudent"));
router.use("/add_image",require("./addimage"));
router.use("/view_image",require("./viewimage"));

module.exports = router;