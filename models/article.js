var mongoose = require('mongoose');

var ArticleSchema = mongoose.Schema({
    title: {
        type: String
    },
    isPublic: {
        type: Boolean
    },
    category: {
        type: String
    },
    description: {
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

module.exports.getLatestArticles = function(params, username, res, callback) {
    Promise.all([

        //First 2 lines - get all articles of logged in user, last 2 lines- get all articles
        // of different users which are public 
        (params.category == 'null')?Article.find({created_by: username}).sort({created: -1}):Article.find(
            {category: params.category, created_by: username}).sort({created: -1}),
        (params.category == 'null')?Article.find({created_by: {$ne: username}, isPublic: true}).sort({created: -1}):Article.find(
            {category: params.category, created_by: {$ne: username}, isPublic: true}).sort({created: -1})
    ]).then(articles => {
        const [selfArticles,othersArticles] = articles;
        articles = selfArticles.concat(othersArticles);
       return res.json({success: true, message: 'Articles successfully fetched', data: articles});
    }).catch(err=>{
        return res.json.status(500).json({success: false, message: err})
      })
}

module.exports.getArticleDetail = function(params, callback) {
    Article.findById(params.id, callback);
}

module.exports.createBlog = function(blogBody, username, callback) {
    var desc = blogBody.description;
    // desc = desc.replace(/^<p>/i, '');
    // desc = desc.replace(/<\/p>$/i, '');
    new_article = new Article({title: blogBody.title, category: blogBody.category, isPublic: blogBody.isPublic , description: desc, created_by: username, 
        modified_by: "", created: new Date(), modified: "", is_deleted: false});
    new_article.save(callback);
}

//To update a Article
module.exports.editBlog = function(blogBody, username, callback) {
    
    Article.update({
        _id: blogBody._id
    },
    {
        category: blogBody.category,
        isPublic: blogBody.isPublic,
        description: blogBody.description,
        modified_by: username,
        modified: new Date()
    },'', callback);
}

module.exports.getAllCategories = function(callback) {
    const aggregatorOpts = [{
        $group: {
            _id: "$category",
            count: { $sum: 1 }
        }
    }]

    Article.aggregate(aggregatorOpts, callback);
}