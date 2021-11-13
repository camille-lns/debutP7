const {Sequelize, DataTypes}  = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', '2602', {
    host: 'localhost',
    dialect: 'mysql' 
});

const Comment = sequelize.define('Post', {  
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
    postId:{
        type:DataTypes.INTEGER,
        allowNull: false 
    }
}, 
    {
    tableName:'Comments'
});

Comment.sync();
module.exports = Comment;