const express = require('express'); 
const router = express.Router(); 

// import auth middleware
// import controller
// import multer middleware
// import sanitize middleware

// créer un post
router.post('/');

// modifier un post
router.put('/:id');

// supprimer un post
router.delete('/:id');

// récupérer un post spécifique
router.get('/:id');

// récupérer tous les posts
router.get('/');



// ajouter ou retirer un like 
router.post('/:id/like');



// ajouter un commentaire 
router.post('/:id/comment');

//modifier un commentaire
router.put('/comment/:id');

//supprimer un commentaire
router.delete('/comment/:id');

module.exports = router; 