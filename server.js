var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();
mongoose.connect("mongodb://localhost/blog");

//including routes
// var index = require('./routes/index');
var articles = require('./routes/articles');
var user = require('./routes/user');

//using MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "dist")));

app.use(passport.initialize());
// app.use(passport.session());

app.use('/api/user', user);

//The angular will call /api thro' its service then the below part will be executed
app.use('/api/articles', articles);

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function() {
    console.log("Server is listening on port "+ app.get('port'));
});