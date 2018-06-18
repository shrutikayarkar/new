var express = require("express");
var router = express.Router();

var student = require('../model/student');
var path = require("path");

router.get("/",function (req,res) {
var pagedata = {title:"add image",pagename:"add image/index"};
res.render("layout",pagedata);
});

router.post("/",function(req,res){
if(req.files.image)
	{	
		console.log(req.files);
		var file = req.files.image;
		var newpath = path.resolve("public/images/upload/"+file.name);
		req.body.image = file.name;
		file.mv(newpath);
	}
student.insert(req.body,function(err,result){
res.redirect("/view_image");
});
});

module.exports = router;