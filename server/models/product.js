var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath : { type: String , required: true},
    title : { type: String , required: true},
    description : { type: String , required: true},
    price : { type: String , required: true},
    priceId : { type: String , required: false}
});

module.exports = mongoose.model('Product', schema);