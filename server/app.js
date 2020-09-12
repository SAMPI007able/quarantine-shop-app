var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 3001 ;
var app = express();

app.use(bodyParser.json());
app.use( cors() );
app.use(bodyParser.urlencoded({extended: true}));
var mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/quarantine-shop-db';
mongoose.
    connect(mongoURI, {useNewUrlParser:true}).
    then(() => console.log('MongoDB Connected..')).
    catch(err => console.error(err));

const userRoutes = require('./routes/users');
app.use('/user', userRoutes);
const productRoutes = require('./routes/products');
app.use('/product', productRoutes);

app.listen(port, (req, res) => {
    console.log('Server is listening.. .');
})

module.exports = app;