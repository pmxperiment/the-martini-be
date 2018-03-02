var mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost:/8080");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost:27017/8080");


module.exports.User = require("./User");
module.exports.Location = require("./Location");
