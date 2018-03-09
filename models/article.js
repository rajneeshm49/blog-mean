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
    Article.find(callback).sort({created_by: -1});
}

module.exports.createBlog = function(blogBody, callback) {
    var desc = blogBody.description;
    desc = desc.replace(/^<p>/i, '');
    desc = desc.replace(/<\/p>$/i, '');
    myBlog = new Article({title: blogBody.title, description: desc, category: "Random", created_by: "Rajneesh", modified_by: "", created: new Date(), modified: "", is_deleted: false});
    myBlog.save(callback);
}