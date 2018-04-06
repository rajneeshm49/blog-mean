var express = require('express');
var router = express.Router();
var Article = require('../models/article');
var passport =  require('passport');
var passportJWT = require('passport-jwt');
var jwt = require('jsonwebtoken');

router.get('/', function(req, res) {
    Article.getLatestArticles(function(err, articles) {
        if(err) console.throw(err);
        res.json(articles);
    })
})

router.post('/createBlog', passport.authenticate('jwt', {'session': false}), function(req, res) {
    if(!req.body.title || !req.body.description) {
        return res.status(200).json({success: false, message: 'Title/Description missing'})
    }
    //get the authorization header that user has passed as a mark of an authenticated user
    var auth_key_bearer = req.get('authorization');
    var auth_key_arr = auth_key_bearer.split(' ');
    var auth_key = auth_key_arr[1];
    
    //In the below line we decode the JWT token(using our secret key) that user has passed. After decoding it will contain all the keys that user had 
    //used while encoding it using 'jwt.sign'. After decoding it we will have username of the user that we will be sending to model
    decoded = jwt.verify(auth_key, 'RajneeshMishra');
    Article.createBlog(req.body, decoded.username, function(err) {
        if(err) {
            return res.status(500).json({success: false, message:err});
        }
        return res.status(200).json({success:true, message: 'Blog created successfully'});
    })

})

module.exports = router;