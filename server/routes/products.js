var express = require('express');
var Product = require('../models/product');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/quarantine-shop-db');

router.post('/getAllProducts', (req, res)=> {
    Product.find()
        .then(docs => {
            if( !docs ){
                res.json( {status: false, msg: `No Product Exists!` });
            } else{
                res.json( {status: true, msg: docs });
            }
        }).catch(err => {
            res.json( {status: false, msg: `Sorry! Exception occured!` });
        })
})

module.exports = router;