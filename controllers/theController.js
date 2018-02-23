var models = require('../models');
var User = models.User;
var Location = models.Location;
var ObjectID = require('mongodb').ObjectID;


//get all the Users
function index_Users(req, res) {
  User.find({}, function(err, users) {
    if (err) res.send(err);
    else res.json(users);
  });
}
