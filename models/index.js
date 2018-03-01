var mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost:/8080");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/be-the-martini-app", {useMongoClient: true});

mongoose.Promise = global.Promise;  // use native Promise



module.exports.User = require("./User");
module.exports.Location = require("./Location");
