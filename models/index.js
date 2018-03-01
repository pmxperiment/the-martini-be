var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:/8080");


module.exports.User = require("./User");
module.exports.Location = require("./Location");
