var mongoose = require("mongoose");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost:/8080");

module.exports.User = require("./User");
module.exports.Location = require("./Location");
