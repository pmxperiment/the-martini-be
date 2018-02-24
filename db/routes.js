var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller.js');

//user routes index
router.get('/api/users', controller.index_users);

//user routes users
router.post('/api/users/', controller.create_user);
router.get('/api/users/:user_id', controller.show_user);
router.delete('/api/users/:user_id', controller.delete_user);

//location routes index
router.get('/api/locations', controller.index_locations);

//routes locations
router.post('/api/locations/', controller.create_location);
router.get('/api/users/:location_id', controller.show_location);
router.delete('/api/locations/:location_id', controller.delete_location)


module.exports = router;
