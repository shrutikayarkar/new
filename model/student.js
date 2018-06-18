var connect = require("../config/connect");
var config = require("../config/db");

module.exports.insert = function (obj,cb) {
connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection("studentData").insert(obj,cb);
});
};

module.exports.find = function (cb) {
connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection("studentData").find().toArray(cb);
});
};

module.exports.remove = function (obj,cb) {
connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection("studentData").remove(obj,cb);
});
};

module.exports.findwhere = function (obj,cb) {
connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection("studentData").find(obj).toArray(cb);
});
};