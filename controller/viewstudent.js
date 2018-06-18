var express = require("express");
var router = express.Router();

var student = require("../model/student");
var mongodb = require("mongodb");

router.get("/",function (req,res) {
student.findwhere({image:{$exists:false}},function(err,result){
student.findwhere({title:{$exists:false}},function(err,result1){
var pagedata = {title:"View student detail",pagename:"view student/index",data:result, data1:result1};
res.render("layout",pagedata);
});
});
});

router.get("/remove/:id",function(req,res){
console.log(req.params.id);
student.remove({_id:mongodb.ObjectId(req.params.id)},function(err,result){
res.redirect("/view");
});
});

module.exports = router;