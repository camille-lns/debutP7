const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const crypto = require('crypto-js');
const { Sequelize, DataTypes } = require('sequelize'); 
const sequelize = new Sequelize('groupomania', 'root', '2602', {
    host: 'localhost',
    dialect: 'mysql' 
});

require('dotenv').config({path: '../config.env'});

const TOKEN = process.env.TOOKEN;

// pour crypto
const key = crypto.enc.Base64.parse(process.env.CR_KEY);
const iv = crypto.enc.Base64.parse(process.env.CR_IV);

// inscription
exports.signup = ((req,res,next) =>{
    const codedEmail = crypto.AES.encrypt(req.body.email, key, {iv:iv}).toString();
    User.findOne({where: {email:codedEmail}})
    .then(user => {
        if (user)
            return res.status(400).json({error : "adresse mail déjà utilisée"});
        bcrypt.hash(req.body.password, 10)
        .then(hashed =>{
            User.create({
                lastName:req.body.name,
                firstName: req.body.firstName, 
                email:codedEmail, 
                password: hashed
            })
            .then(() => res.status(201).json({message: "utilisateur créé"}))
            .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({error}));   
    })
    .catch(error => res.status(500).json(error)); 
});

// connexion
exports.login =((req, res, next) =>{
    const codedEmail = crypto.AES.encrypt(req.body.email, key, {iv:iv}).toString();
    User.findOne({where: {email: codedEmail}})
    .then(user =>{
        if (!user) { 
            return res.status(401).json({message:"Utilisateur inexistant"});    
        } 
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (valid) 
            {
                return res.status(200).json({
                    userId: user.id,
                    token: jwt.sign({
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
});


