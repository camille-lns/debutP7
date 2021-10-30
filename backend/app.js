const { Sequelize } = require('sequelize');
const express = require('express'); 
const app = express(); 

const userRoutes = require('./routes/user'); 
const postRoutes = require('./routes/post');

const sequelize = new Sequelize('groupomania', 'root', '2602', {
    host: 'localhost',
    dialect: 'mysql' 
});

sequelize.authenticate()
    .then(() => console.log('Connexion réussie'))
    .catch(() => console.log('Connexion échouée'));


app.use('/api/post', postRoutes); 
app.use('/api/user', userRoutes);

module.exports = app;