var express = require('express');
var router = express.Router();
var Article = require('../models/article');

router.get('/', function(req, res) {
    Article.getLatestArticles(function(err, articles) {
        if(err) console.throw(err);
        res.json(articles);
    })
})

router.post('/createBlog', function(req, res) {
    if(!req.body.title || !req.body.description) {
        return res.status(200).json({success: false, message: 'Title/Description missing'})
    }
    Article.createBlog(req.body, function(err) {
        if(err) {
            return res.status(500).json({success: false, message:err});
        }
        return res.status(200).json({success:true, message: 'Blog created successfully'});
    })

})
module.exports = router;