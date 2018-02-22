var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Location = require('./location');

var UserSchema = new Schema({
  name: String,
  locations: [Location.schema]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
