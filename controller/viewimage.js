var express = require("express");
var router = express.Router();
var mongodb=require("mongodb");
var student = require('../model/student');

router.get("/",function (req,res) {
student.findwhere({image:{$exists:true}},function(err,result){
	console.log(result);
var pagedata = {title:"add image",pagename:"view image/index",data:result};
res.render("layout",pagedata);
});
});

router.get("/remove/:id",function(req,res){
console.log(req.params.id);
student.remove({_id:mongodb.ObjectId(req.params.id)},function(err,result){
res.redirect("/view_image");
});
});




module.exports = router;