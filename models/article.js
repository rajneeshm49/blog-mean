var mongoose = require('mongoose');

var ArticleSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    created_by: {
        type: String
    },
    modified_by: {
        type: String
    },
    created: {
        type: Date
    },
    modified: {
        type: Date
    },
    is_deleted: {
        type: Boolean
    }
});

var Article = module.exports = mongoose.model('Article', ArticleSchema);

module.exports.getLatestArticles = function(callback) {
    Article.find(callback);
}