var express = require("express");
var router = express.Router();

var student = require("../model/student");

router.get("/",function (req,res) {
var pagedata = {title:"Add student detail",pagename:"add student/index", message:req.flash("msg")};
res.render("layout",pagedata);
});

router.post("/",function(req,res){
student.insert(req.body,function(err,result){
console.log(result);
req.flash("msg","Details added successfully");
res.redirect("/add");

});
});
module.exports = router;
