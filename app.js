var express = require("express");
var app = express();

// ALL REQUIRE CODES........
var parser = require("body-parser");
var cookie = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var upload = require("express-fileupload");


app.set("view engine","ejs");
app.set("views", "view");

// ALL USE CODES............
app.use(parser());
app.use(cookie());
app.use(session({secret:"123"}));
app.use(flash());
app.use(upload());
app.use(express.static(__dirname+"/public"));
app.use(require("./controller/default"));


app.listen(3000,function (req,res) {
	console.log("running....");
});