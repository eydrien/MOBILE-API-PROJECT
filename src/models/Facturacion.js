const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');


const Facturacion = sequelize.define('Facturacion', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    total: { type: DataTypes.FLOAT, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: 'pending' },
    details: { type: DataTypes.TEXT }
}, { timestamps: true });


module.exports = Facturacion;
