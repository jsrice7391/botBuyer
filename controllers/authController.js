const db = require("../models");
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();


module.exports = {
    registerUser: (req, res) => {
        if (!req.body.username || !req.body.password) {
            res.json({
                success: false,
                msg: 'Please pass username and password.'
            });
        } else {
                db.User.create(req.body)
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err));
  
          }
        },
    signInUser: (req, res) => {
        console.log("In the user name route")
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

function newFunction(err) {
    console.log(err);
}
