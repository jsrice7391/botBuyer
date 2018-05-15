const db = require("../models");
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/User");


module.exports = {
    registerUser: (req,res) =>{
        if(!req.body.username || !req.body.password){
            res.json({success: false, message: "Please enter a name and password"})
        }else{
            let newUser = new User({
                username: req.body.username,
                    password: req.body.password
                });
            newUser.save(function(err){
                if(err){
                    return res.json({success:false, message:"User is a duplicate"})
                }
                res.json({success: true, message: "User created"})
            })
        }

    },
    signInUser:(req,res) => {
         User.findOne({
         username: req.body.username
         }, function (err, user) {
         if (err) throw err;

         if (!user) {
             res.status(401).send({
                 success: false,
                 msg: 'Authentication failed. User not found.'
             });
         } else {
             // check if password matches
             user.comparePassword(req.body.password, function (err, isMatch) {
                 if (isMatch && !err) {
                     // if user is found and password is right create a token
                     var token = jwt.sign(user.toJSON(), settings.secret);
                     // return the information including token as JSON
                     res.json({
                         success: true,
                         token: 'JWT ' + token
                     });
                 } else {
                     res.status(401).send({
                         success: false,
                         msg: 'Authentication failed. Wrong password.'
                     });
                 }
             });
         }
         });

    }
}