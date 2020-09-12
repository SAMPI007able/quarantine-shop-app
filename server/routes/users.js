var express = require('express');
var router = express.Router();
var cors = require('cors');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User = require('../models/user');
var app = express();
app.use(cors());
process.env.SECRET_KEY = `secret_code`;
router.post('/register', (req, res) => {
    const userData = {...req.body};
    User.findOne({
        email: userData['email']
    }).then(user => {
        if( !user ) {
            bcrypt.hash( req.body.password, 10, (err, hash) => {
                userData.password = hash; 
                User.create(userData)
                .then(user => {
                    res.send({ status: true, msg: `${user.email} created!` })
                }).catch(err =>{
                    res.send({ status: false, msg: err });
                })
            })            
        } else{
            res.send({ status: false, msg: 'User Already Exists!' })           
        }
    }).catch(err => {
        res.send({ status: false, msg: err })       
    })
})

router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        const passwordMatched = bcrypt.compareSync( req.body.password, user.password );
        if(passwordMatched){
            const payLoad = {
                _id : user._id,
                fname: user.fname,
                email: user.email
            }
            const token = jwt.sign(payLoad, process.env.SECRET_KEY, {
                expiresIn: 2000
            });
            res.json( {status: true, token: token });
        } else{
            res.json( {status: false, token: `User doesn't exist` });
        }
    }).catch(err => {
        res.json( {status: false, token: `User doesn't exist` });
    })
})
module.exports = router;