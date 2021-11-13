const { Sequelize, DataTypes } = require('sequelize'); 

const sequelize = new Sequelize('groupomania', 'root', '2602', {
    host: 'localhost',
    dialect: 'mysql' 
});

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    lastName: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    profilPictureUrl:{
        type: DataTypes.STRING,
        allowNull: true
    }, 
    role: {
        type: DataTypes.ENUM('user', 'admin'), 
        default: 'user'
    }
}, { 
    tableName:'Users'
}); 

User.sync();
module.exports = User;