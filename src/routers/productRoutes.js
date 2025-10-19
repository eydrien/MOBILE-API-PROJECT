const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD de productos
router.get('/', productController.getAllProducts);     // Obtener todos
router.get('/:id', productController.getProductById);   // Obtener uno
router.post('/', productController.createProduct);      // Crear nuevo
router.put('/:id', productController.updateProduct);    // Actualizar
router.delete('/:id', productController.deleteProduct); // Eliminar

module.exports = router;
