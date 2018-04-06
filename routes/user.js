var express = require('express');
var router = express.Router();

var User = require('../models/user');

//passport module facilitates login task
var passport = require('passport');
var passportJWT = require('passport-jwt');
var jwt = require('jsonwebtoken');

var extractJWT = passportJWT.ExtractJwt;
var jwtStrategy = passportJWT.Strategy;

var jwtOptions = {};
jwtOptions.jwtFromRequest = extractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'RajneeshMishra';

passport.use(new jwtStrategy(jwtOptions, function(jwt_payload, done) {
  User.getUserById(jwt_payload.id, function(err, user) {
    if(err) {
      done(err, false);
    }
    if(user) {
      done(null, user);
    } else {
      done(null, false);
    }
  })
}))

router.post("/login", function(req, res) {

  if(!req.body.username || !req.body.password) {
    return res.json({success: false, message: 'Username/Password missing'});
  }
  User.getByUsername(req.body.username, function(err, user) {
    if(err) {
      return res.status(500).json({success: false, message: err});
    }
    if(!user) {
      return res.json({success: false, message: 'User not found'});
    }
    User.comparePassword(req.body.password, user.password, function(err, isMatch) {
      if(err) {
        return res.status(500).json({success: false, message: err})
      }
      if(!isMatch) {
        return res.json({success: false, message: "Incorrect Password"})
      }

      //since user is authorized, we will return him a token he can use for further requests
      var payload = {id: user.id, username: user.username};
      var token = jwt.sign(payload, jwtOptions.secretOrKey);
      var dec = jwt.verify(token, jwtOptions.secretOrKey);
      return res.json({success: true, message: 'User successfully logged in', name: user.username, token: token});
    })
  })
})

router.post('/register', function(req, res) {
  if(!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.username || !req.body.password || !req.body.confirm_pwd) {
    return res.json({success: false, message: 'Please pass all the fields'});
  }
  if(req.body.password != req.body.confirm_pwd) {
    return res.json({success: false, message: 'Password did not match with confirm password'})
  }

  var newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    username:req.body.email,
    password: req.body.password
  });
  
  User.createUser(newUser, function(err) {
    if(err) {
      return res.status(500).json({success: false, message:err});
    }
    return res.json({success:true, message: "User successfully registered"});
  })
})

router.get('/secret', passport.authenticate('jwt', {'session': false}),function(req, res) {
  return res.json({'success': true, 'message': 'success! You cannot see this without token'});
})

module.exports = router;
