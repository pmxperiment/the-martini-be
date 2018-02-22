var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('./User');

var LocationSchema = new Schema({
    location: String,
    category: String,
    daily_fee: String,
    pic_url: String,
    location_description: String,
    user:[User.schema]
});

var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
