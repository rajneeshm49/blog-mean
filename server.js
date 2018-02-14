var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
mongoose.connect("mongodb://localhost/blog");

//including routes
// var index = require('./routes/index');
var api = require('./routes/api');

//using MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "dist")));

app.use('/api', api);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log("Server is listening on port "+ app.get('port'));
});