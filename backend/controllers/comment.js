const { sequelize } = require('../models/post');
const Comment = require('../models/comment'); 

// ajouter un commentaire 
exports.addComment = (req, res, next) => {
    sequelize.query(`SELECT id FROM POSTS where id = ${req.body.postId}`, { type: sequelize.QueryTypes.SELECT} )
    .then((post) => {
        if (post.length === 0){
            return res.status(404).json({message : "Ce post n'existe pas"});
        }
        Comment.create({
            text: req.body.text,
            userId: req.body.userId, 
            postId: req.body.postId
        })
        .then(() => res.status(201).json({message: "Commentaire ajouté avec succès" }))
        .catch(() => res.status(400).json({message: "Erreur lors de l'ajout du commentaire"}));
    })
    .catch(error => res.status(404).json({ error }));
};

// récupérer tous les commentaires du post 
exports.findComments = (req, res, next) =>{
    sequelize.query(`SELECT comment.text, comment.id, users.firstName, users.lastName, comment.UserId, comment.createdAt FROM comment, Posts, Users WHERE comment.PostId = 
        ${req.params.id} AND posts.id = ${req.params.id} AND users.id = comment.UserId`,
    { type: sequelize.QueryTypes.SELECT})
    .then(comments => {
        for (let comment of comments)
            comment.text = decodeURIComponent(comment.text);
        res.status(200).json({comments})
    })
    .catch(error => res.status(404).json({error}));
};

// modifier un commentaire 
exports.updateComment = (req, res, next) => {
    if(!req.body.userId) 
        return res.status(401).json({message : "Modification de commentaire non autorisée"})

    Comment.update( { text: req.body.text}, {
        where: {
            id : req.params.id,
            UserId : req.body.userId
        }
    })
    .then(() => res.status(200).json())
    .catch(error => res.status(500).json(error));
};

// supprimer un commentaire 
exports.deleteComment = (req, res, next) => {
    if(!req.body.userId) 
        return res.status(401).json({message : "Suppression de commentaire non autorisée"})

        Comment.destroy({where: {id: req.params.id}})
        .then(()=> res.status(200).json({message: "Suppression effectuée"}))
        .catch(error => res.status(500).json(error));
};





