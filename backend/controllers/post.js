const { sequelize } = require('../models/post');
const Post = require('../models/post');
const Like = require('../models/like'); 

// créer un post 
exports.createPost = (req, res, next) => {
    let imageUrl = null;
    if (req.file){
        imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;     
    }
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
    if(!req.body.userId) {
        return res.status(401).json({error : "Modification non conforme"})
    }
    Post.update({text: req.body.text}, {where:{id:req.params.id}})
    .then(() => res.status(200).json({message : "Post modifié avec succès"}))
    .catch(err => res.status(500).json(err));
};

// supprimer un post 
exports.deletePost = (req, res, next) => {
    if(!req.body.userId) {
        return res.status(401).json({error : "Suppression non autorisée"})
    }

    Post.findOne({where:{id:req.params.id}})
        .then(post => {console.log(post); 
            post.destroy();
            res.status(200).json({message:"Post supprimé avec succès"});
        })
        .catch(error => res.status(500).json({ message:"Erreur dans la suppression du post" }));
};

// afficher les posts sur la page principale 
exports.findPosts = (req,res,next) => {
    sequelize.query('SELECT firstName, lastName, posts.id, posts.createdAt, text, posts.userId, users.profilPictureUrl, posts.imgUrl FROM users, posts WHERE posts.userId = users.id ORDER BY posts.id DESC', { type: sequelize.QueryTypes.SELECT})
    .then(posts => {
        for (let post of posts)
            post.text = decodeURIComponent(post.text);
        res.status(200).json({posts})
    })
    .catch(error => res.status(404).json({error}));
};

//récupérer les likes d'un post 
exports.getPostLikes = (req,res,next) =>{
    sequelize.query(`SELECT * FROM likes WHERE PostId = ${req.params.id} AND isActive=true `, {type: sequelize.QueryTypes.SELECT})
    .then(likes => {res.status(200).json(likes)})
    .catch(error => res.status(500).json(error));
};

// likes
exports.like = (req,res,next) =>{
    sequelize.query(`SELECT id, isActive FROM likes WHERE UserId = ${req.body.userId} AND PostId = ${req.params.id}`, {type:sequelize.QueryTypes.SELECT})
    .then( like =>{
        if (like.length === 0) // aucun like existant, on le crée 
        {
            Like.create({
                UserId: req.body.userId,
                PostId: req.params.id,
                Active: true
            })
            .then(() => 
                res.status(201).json({message:"Like ajouté"}))
            .catch(error => res.status(400).json(error))
        }
        else // le like est déjà existant, on l'active ou le désactive au clic
        {
            const LikeBehaviour = like[0].Active ? false : true;
            sequelize.query(`UPDATE Likes SET isActive=${LikeBehaviour} WHERE UserId=${req.body.userId} AND PostId=${req.params.id}`, {type:sequelize.QueryTypes.UPDATE})
            .then(() => res.status(200).json({message: "Mise à jour du like"}))
            .catch(error => res.status(500).json(error));
        }
    })
    .catch(error =>  res.status(500).json({error}));
};