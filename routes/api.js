var express = require('express');
var router = express.Router();
var Article = require('../models/article');

router.get('/', function(req, res) {
    Article.getLatestArticles(function(err, articles) {
        if(err) console.throw(err);
        res.json(articles);
    })
})

module.exports = router;