var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

var User = module.exports = mongoose.model('user', userSchema);

module.exports.getByUsername = function(username, callback) {
    var query = { username: username};
    User.findOne(query, callback);
}

module.exports.comparePassword = function(userPassword, hash, callback) {
    bcrypt.compare(userPassword, hash, function(err, isMatch) {
        if(err) {
            throw err;
        }
        callback(null, isMatch);
    });
}