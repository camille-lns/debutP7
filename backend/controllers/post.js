const { sequelize } = require('../models/post');
const Post = require('../models/post');

// créer un post 
exports.createPost = (req, res, next) => {
    Post.create({
        text: req.body.text,
        userId: req.body.userId,
        imgUrl: imageUrl
    })
    .then(() => res.status(201).json({message:"Nouveau post créé"}))
    .catch(err => res.status(500).json({err}));
};

// modifier un post 
exports.updatePost = (req, res, next) => {
    if(!req.body.userId || (req.body.userId != req.body.posterId)) {
        return res.status(401).json({error : "Modification non autorisée"})
    }

    Post.update({text: req.body.text}, {where:{id:req.params.id}})
    .then(() => res.status(200).json())
    .catch(err => res.status(500).json(err));
};

// supprimer un post 
exports.deletePost = (req, res, next) => {
    if(!req.body.userId || (req.body.userId != req.body.posterId)) {
        return res.status(401).json({error : "Suppression non autorisée"})
    }

    Post.findOne({where:{id:req.params.id}})
        .then(post => {console.log(post); 
            post.destroy();
        })
        .catch(error => res.status(500).json({ error }));
};



// `${req.protocol}://${req.get('host')}/images/${req.file.filename}`