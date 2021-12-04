const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const express = require('express'); 
const app = express(); 
const helmet = require('helmet');
const cors = require('cors');

const userRoutes = require('./routes/user'); 
const postRoutes = require('./routes/post');

const sequelize = new Sequelize('groupomania', 'root', '2602', {
    host: 'localhost',
    dialect: 'mysql' 
});

app.use(cors());

sequelize.authenticate()
    .then(() => console.log('Connexion réussie'))
    .catch(() => console.log('Connexion échouée'));

app.use(bodyParser.json());
app.use(helmet());

// app.use((req,res,next) =>{
//    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); 
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,  OPTIONS, PATCH');
//    next();
// });

app.use('/api/posts', postRoutes); 
app.use('/api/users', userRoutes);

module.exports = app;