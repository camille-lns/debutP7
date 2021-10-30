const express = require('express'); 
const router = express.Router();

const userCtrl = require('../controllers/user'); 
const passwordValidator = require('../models/password');
const passwordValidation = require('../middleware/password-validation');

// inscription
router.post('/signup', passwordValidator, passwordValidation, userCtrl.signup);

// connexion
router.post('/login', passwordValidator, passwordValidation, userCtrl.login);



module.exports = router; 