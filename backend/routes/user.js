const express = require('express'); 
const router = express.Router();

const userCtrl = require('../controllers/user');
const passwordValidation = require('../middleware/password-validation');
const emailValidation = require('../middleware/email-validation');

// inscription
router.post('/signup', emailValidation, passwordValidation, userCtrl.signup);
// connexion
router.post('/login', emailValidation, passwordValidation, userCtrl.login);

// supprimer 
router.delete('/:id', auth, userCtrl.deleteUserAccount);

// récupérer les infos profil d'un utilisateur 
router.post('/:id', auth, userCtrl.getOneUser); 
// mettre à jour la photo de profil 
router.post('/:id/img', auth, multer, userCtrl.updateProfilPic);


module.exports = router; 