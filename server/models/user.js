var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    fname: { type: String, required: true },
	email: { type: String, required: true },
    password: { type: String, required: true },
    created: { type:Date, default: Date.now }	
});

module.exports = mongoose.model('User', userSchema);