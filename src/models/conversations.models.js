const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Users = require('./users.models')


const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING
    },
    userId: { // Debe ser camel case. Nombrar en singular seguido de id
        type: DataTypes.UUID,
        allowNull: false,
        references: { // Crear llaves foraneas
            key: 'id',
            model: Users
        }
    }
})


module.exports = Conversations
