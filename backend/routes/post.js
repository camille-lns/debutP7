const express = require('express'); 
const router = express.Router(); 
const postCtrl = require('../controllers/post'); 
const commentCtrl = require('../controllers/comment');

// middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer');
const sanitize = require('../middleware/sanitize');

// créer un post
router.post('/', auth, multer, postCtrl.createPost);
// modifier un post
router.put('/:id', auth, multer, sanitize, postCtrl.updatePost);
// supprimer un post
router.delete('/:id', auth, multer, postCtrl.deletePost);

// récupérer un post spécifique
router.get('/:id');
// récupérer tous les posts
router.get('/');


// ajouter ou retirer un like 
router.post('/:id/like', auth, postCtrl.like);
//récupérer tous les likes d'un post 
router.post('/:id/likes', auth, postCtrl.getPostLikes);


// ajouter un commentaire 
router.post('/:id/comment', auth, sanitize, commentCtrl.addComment);
// récupérer les commentaires 
router.post('/commentaires', auth, commentCtrl.findComments);
//modifier un commentaire
router.put('/comment/:id', auth, sanitize, commentCtrl.updateComment);
//supprimer un commentaire
router.delete('/comment/:id', auth, commentCtrl.deleteComment);

module.exports = router; 