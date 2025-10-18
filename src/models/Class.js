const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');


const Class = sequelize.define('Class', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    instructor: { type: DataTypes.STRING },
    schedule: { type: DataTypes.STRING }
}, { timestamps: true });


module.exports = Class;
