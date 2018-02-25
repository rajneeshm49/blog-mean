var express = require('express');
var router = express.Router();

//passport module facilitates login task
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');
var response = {
  msg: 'Succesfully logged in', status: "200", error: false 
}

passport.use(new LocalStrategy(
    function(username, password, done) {
      
      User.getByUsername(username, function(err, user) {
        if(err) {
          throw err;
        }
        if(!user) {
          // return done(null, false, {message: 'Unknown User'});
          response.msg = 'Unknown User';
          console.log('sdsdsd');
          return response;
        }
        User.comparePassword(password, user.password, function(err, isMatch) {
          if(err) {
            throw err;
          }
          
          if(!isMatch) {
            // return done(null, false, {message: 'Incorrect Password'});
            response.msg = 'Incorrect Password';
            return response;
          }
          // return done(null, user, {message: 'Successfull'});
          return response;
        })
      })
    }
));

passport.serializeUser(function(user, done) {
  console.log('ddddd');
    // done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
  console.log('sssss');
    User.getUserById(id, function(err, user) {
      // done(err, user);
    });
});

//Code to authenticate user
router.post('/login',
  //when we are not using angular and front end is in node itself then put failureFlash as true to display error message
  //the below passport.authenticate will call the above defined passport.use code snippet
  passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login', failureFlash: false}),
  function(req, res) {
    console.log('iam here');
    // res.redirect('/api');
  });

// router.post('/login', function(req, res) {
//     User.getByUsername(req.body.username, function(err, user) {
//         if(err) throw err;

//         User.comparePassword(req.body.password, user.password, function(err) {
//             if(err) throw(err);
//             res.redirect('/api');
//         })
//     })
// })

module.exports = router;