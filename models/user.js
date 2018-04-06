var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true  
    }
});

var User = module.exports = mongoose.model('user', userSchema);

module.exports.getByUsername = function(username, callback) {
    var query = { username: username};
    User.findOne(query, callback);
}

module.exports.comparePassword = function(userPassword, hash, callback) {
    bcrypt.compare(userPassword, hash, callback);
}

module.exports.getUserById = function(id, callback) {
	User.findById(id, callback);
}

module.exports.createUser = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            // Store hash in your password DB.
            newUser.password = hash;
            newUser.save(callback);       
        });
    });
}