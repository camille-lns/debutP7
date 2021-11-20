const {Sequelize, DataTypes}  = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', '2602', {
    host: 'localhost',
    dialect: 'mysql' 
});

const Like = sequelize.define('Like',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    UserId: {
        type: DataTypes.INTEGER,
		allowNull: false
    },
    PostId: {
        type: DataTypes.INTEGER,
		allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
}, 
{
    tableName:"Likes"
})



Like.sync();
module.exports = Like;