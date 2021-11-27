const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const cryptoJS = require('crypto-js');
const { sequelize } = require('../models/user');
const Like = require('../models/like'); 
const Post = require ('../models/post'); 
const Comment = require('../models/comment');
const fs = require('fs');

require('dotenv').config()

const TOKEN = process.env.TOOKEN;

// pour crypto
const key = cryptoJS.enc.Base64.parse(process.env.CR_KEY);
const iv = cryptoJS.enc.Base64.parse(process.env.CR_IV);

// inscription
exports.signup = (req,res,next) => {
    const codedEmail = cryptoJS.AES.encrypt(req.body.email, key, {iv:iv}).toString();
    console.log(req.body.email);
    User.findOne({where: {email:codedEmail}})
    .then(user => {
        if (user)
            return res.status(400).json({error : "adresse mail déjà utilisée"});
        bcrypt.hash(req.body.password, 10)
        .then(hashed =>{
            User.create({
                lastName: req.body.lastName,
                firstName: req.body.firstName, 
                email:codedEmail, 
                profilPictureUrl: `${req.protocol}://${req.get('host')}/images/profilepic.png`,
                password: hashed
            })
            .then(() => res.status(201).json({message: "utilisateur créé"}))
            .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({error}));   
    })
    .catch(error => res.status(500).json(error)); 
};

// connexion
exports.login = (req, res, next) =>{
    const codedEmail = cryptoJS.AES.encrypt(req.body.email, key, {iv:iv}).toString();
    User.findOne({where: {email: codedEmail}})
    .then(user =>{
        if (!user) { 
            return res.status(401).json({message:"Utilisateur inexistant"});    
        } 
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (valid) 
            {
                return res.status(200).json( {
                    userId: user.id,
                    token: jwt.sign( {
                        userId: user.id},
                        TOKEN, 
                        { expiresIn: '24h'}
                    )
                });
            }
            else return res.status(401).json({message:"Connexion non autorisée"});
        }) 
        .catch(err => res.status(500).json({err}));
    })
    .catch(err => res.status(500).json({err}));
};

// récupérer un profil 
exports.getOneUser = (req, res, next) => {
    User.findOne({ where: { id: req.params.id } })
        .then(user => res.status(200).json({ user }))
        .catch(error => res.status(404).json({ error }))
};

// supprimer un utilisateur 
exports.deleteUserAccount = (req, res, next) => {
    if (!req.body.userId ) 
        return res.status(401).json({erreur :"Suppression non autorisée"});

    User.findOne({ where: { id: req.params.id } })
    .then(url => {
        if (url[0].profilPictureUrl != 'http://localhost:3000/images/profilepic.png' ){
            const filename = url[0].profilPictureUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, (err) =>{ if (err) console.log(`${err} : Impossible de supprimer l'image '${filename}' sur serveur`)});
        }
        Like.destroy({where: {userId: req.params.id}})
        .then(() =>{
            Commentaire.destroy({where: {userid:req.params.id}})
            .then(() =>{
                Post.destroy({where: {userId: req.params.id}})
                .then(() => {
                    User.destroy({where: {id: req.params.id}})
                    .then(() => res.status(200).json())
                    .catch(error => res.status(500).json({error}));
                })
                .catch(error => res.status(500).json({error}))
            })
            .catch(error => res.status(500).json({error}));
        })
        .catch(error => res.status(500).json({error}));
    })
    .catch(error => res.status(500).json({error})); 
};

//Change profil image
exports.updateProfilPic = (req,res,next) => {
    sequelize.query(`SELECT profilPictureUrl FROM users WHERE id = ${req.params.id}` ,{type:sequelize.QueryTypes.SELECT})
    .then(image =>{
        if (image[0].profilPictureUrl != 'http://localhost:3000/images/profilepic.png'){
            const filename = image[0].profilPictureUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, (err) =>{ if (err) console.log(`${err} : Impossible de modifier l'image '${filename}' sur le serveur`)});
        }
        // on remplace par la nouvelle image
        const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;     
        User.update({profilPictureUrl : imageUrl},{
            where:{
                id : req.params.id
            }
        })
        .then(() => res.status(201).json(imageUrl)) 
        .catch(error => res.status(500).json({error}));
    })
    .catch(error => res.status(500).json({error}));
};