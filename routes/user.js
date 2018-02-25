var express = require('express');
var router = express.Router();

//passport module facilitates login task
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

router.post("/login", function(req, res) {
  User.getByUsername(req.body.username, function(err, user) {
    if(err) {
      console.log('hello');
      res.json({success: false, message: err});
    }
     if(!user) {
       res.status(403).send({success: false, message: 'User not found'});
     }
     User.comparePassword(req.body.password, user.password, function(err, isMatch) {
       if(err) {
         res.json({success: false, message: err})
       }
       res.json({success: true, message: 'User successfully logged in'});
     })
  })
})

module.exports = router;