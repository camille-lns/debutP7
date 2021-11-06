const express = require('express'); 
const router = express.Router();

const userCtrl = require('../controllers/user');
const passwordValidation = require('../middleware/password-validation');
const emailValidation = require('../middleware/email-validation');

// inscription
router.post('/signup', emailValidation, passwordValidation, userCtrl.signup);

// connexion
router.post('/login', emailValidation, passwordValidation, userCtrl.login);

module.exports = router; 