const {Sequelize, DataTypes}  = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', '2602', {
    host: 'localhost',
    dialect: 'mysql' 
});

const Post = sequelize.define('Post', {  
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId :{
        type: DataTypes.STRING,
        allowNull: false
    },
    imgUrl:{
        type: DataTypes.STRING,
        allowNull: true,
    },
}, 
    {
    tableName:'Posts'
});

Post.sync();
module.exports = Post;