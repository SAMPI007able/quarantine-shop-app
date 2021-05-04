var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');

var port = process.env.PORT || 3001 ;
var app = express();

app.use(bodyParser.json());
app.use( cors() );
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname , path.join('/dist/quarantine-shop-app')));
app.get('/*', (req, res) => res.sendFile(__dirname) );

var mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/quarantine-shop-db';
mongoose.
    connect(mongoURI, {useUnifiedTopology: true, useNewUrlParser:true}).
    then(() => console.log('MongoDB Connected..')).
    catch(err => console.error(err));

const userRoutes = require('./routes/users');
app.use('/user', userRoutes);
const productRoutes = require('./routes/products');
app.use('/product', productRoutes);

const server = http.createServer(app);
server.listen(port, () => {
    console.log('Server is listening.. .');
})

module.exports = app;