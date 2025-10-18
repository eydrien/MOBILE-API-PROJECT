const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');


const Agenda = sequelize.define('Agenda', {
    title: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    notes: { type: DataTypes.TEXT }
}, { timestamps: true });


module.exports = Agenda;
