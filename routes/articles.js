var express = require('express');
var router = express.Router();
var Article = require('../models/article');
var passport =  require('passport');
var passportJWT = require('passport-jwt');
var jwt = require('jsonwebtoken');

router.get('/', passport.authenticate('jwt', {'session': false}), function(req, res) {

    var auth_key_bearer = req.get('authorization');
    var auth_key_arr = auth_key_bearer.split(' ');
    var auth_key = auth_key_arr[1];
    
    //In the below line we decode the JWT token(using our secret key) that user has passed. After decoding it will contain all the keys that user had 
    //used while encoding it using 'jwt.sign'. After decoding it we will have username of the user that we will be sending to model
    decoded = jwt.verify(auth_key, 'RajneeshMishra');

    Article.getLatestArticles(req.query, decoded.username, res, false)
    //Here the last param is callback and iam passing it as false
})

router.get('/detail', function(req, res) {
    Article.getArticleDetail(req.query, function(err, detail) {
        if(err) {
            return res.json.status(500).json({success: false, message: err.message})
        }
        return res.json({success: true, message: 'Article details successfully fetched', data: detail});
    })
})

router.post('/createBlog', passport.authenticate('jwt', {'session': false}), function(req, res) {
    if(!req.body.title || !req.body.category || !req.body.description) {
        return res.status(200).json({success: false, message: 'Title/Category/Description missing'})
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

router.put('/editBlog', passport.authenticate('jwt', {'session': false}), function(req, res) {
    if(!req.body._id || !req.body.title || !req.body.category || !req.body.description) {
        return res.status(200).json({success: false, message: 'Title/Category/Description missing'})
    }
    //get the authorization header that user has passed as a mark of an authenticated user
    var auth_key_bearer = req.get('authorization');
    var auth_key_arr = auth_key_bearer.split(' ');
    var auth_key = auth_key_arr[1];
    
    //In the below line we decode the JWT token(using our secret key) that user has passed. After decoding it will contain all the keys that user had 
    //used while encoding it using 'jwt.sign'. After decoding it we will have username of the user that we will be sending to model
    decoded = jwt.verify(auth_key, 'RajneeshMishra');
    Article.editBlog(req.body, decoded.username, function(err) {
        if(err) {
            return res.status(500).json({success: false, message:err});
        }
        return res.status(200).json({success:true, message: 'Blog updated successfully'});
    })

})

router.get('/categories', passport.authenticate('jwt', {'session': false}), function(req, res) {
    Article.getAllCategories(function(err, categories) {
        if(err) {
            return res.status(500).json({success: false, message:err.message});
        }
        return res.json({success: true, message: 'Categories successfully fetched', data: categories});
    })
})

module.exports = router;