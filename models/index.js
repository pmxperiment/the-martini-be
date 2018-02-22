var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/3000");

module.exports.User = require("./User");
module.exports.Location = require("./Location");
