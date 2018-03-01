var models = require('../models');
var User = models.User;
var Location = models.Location;


//GET index of users
function index_users(req, res) {
  User.find({}, function(err, users) {
    if (err) res.send(err);
    else res.json(users);
  });
}

//POST a new user
function create_user(req, res) {
  User.create(req.body, function(err, user) {
    if (err) { console.log('error', err); }
    res.json(user);
  });
}

//GET one user
function show_user(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    res.json(user);
  });
}

//DELETE a user
function delete_user(req, res) {
	User.findByIdAndRemove(req.params.user_id, function(err, user) {
	    if (err) { console.log('error', err); }
	    res.send(200);
  	});
}

//GET index of locations
function index_locations(req, res) {
  Location.find({}, function(err, locations) {
    if (err) res.send(err);
    else res.json(locations);
  });
}

//POST a new location
function create_location(req, res) {
  console.log(req.body)
  Location.create(req.body, function(err, location) {
    if (err) { console.log('error', err); }
    res.json(location);
  })
}

//GET one location
function show_location(req, res) {
  Location.findById(req.params.location_id, function(err, location) {
    res.json(location);
  });
}

//DELETE a location
function delete_location(req, res) {
	Location.findByIdAndRemove(req.params.location_id, function(err, user) {
	    if (err) { console.log('error', err); }
	    res.send(200);
  	});
}


module.exports = {
  index_users: index_users,
  create_user: create_user,
  show_user: show_user,
  delete_user: delete_user,
  index_locations: index_locations,
  create_location: create_location,
  show_location: show_location,
  delete_location: delete_location
  };
