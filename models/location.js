var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('./User');

var LocationSchema = new Schema({
    set_name: String,
    category: String,
    daily_fee: String,
    pic_url: String,
    contact_info: String,
    description: String
});

var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
