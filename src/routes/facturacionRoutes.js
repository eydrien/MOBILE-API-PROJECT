const express = require('express');
const router = express.Router();
const facturacionController = require('../controllers/facturacionController');

router.get('/', facturacionController.getAll);
router.get('/:id', facturacionController.getById);
router.post('/', facturacionController.create);
router.put('/:id', facturacionController.update);
router.delete('/:id', facturacionController.delete);

module.exports = router;
