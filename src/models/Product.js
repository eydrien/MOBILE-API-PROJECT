const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  timestamps: true // Agrega los campos createdAt y updatedAt automáticamente

<<<<<<< HEAD:src/models/product.js
});
module.exports = Product;
=======
 });
 module.exports = Product;
>>>>>>> d0e648885681f56cb4b189396d5207f76653ef17:src/models/Product.js
