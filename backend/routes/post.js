const express = require('express'); 
const router = express.Router(); 
const postCtrl = require('../controllers/post'); 
const commentCtrl = require('../controllers/comment');

// import auth middleware
// import controller
// import multer middleware
// import sanitize middleware

// créer un post
router.post('/', postCtrl.createPost);
// modifier un post
router.put('/:id', postCtrl.updatePost);
// supprimer un post
router.delete('/:id', postCtrl.deletePost);

// récupérer un post spécifique
router.get('/:id');
// récupérer tous les posts
router.get('/');


// ajouter ou retirer un like 
router.post('/:id/like');



// ajouter un commentaire 
router.post('/:id/comment', commentCtrl.addComment);
//modifier un commentaire
router.put('/comment/:id', commentCtrl.updateComment);
//supprimer un commentaire
router.delete('/comment/:id', commentCtrl.deleteComment);

module.exports = router; 