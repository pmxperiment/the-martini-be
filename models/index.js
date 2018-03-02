var mongoose = require("mongoose");
var User = require("./User");
var Location = require("./location");

//mongoose.connect("mongodb://localhost:/8080");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost:27017/8080");


module.exports.User = User;
module.exports.Location = Location;
