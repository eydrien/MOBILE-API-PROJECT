
const Facturacion = require('../models/Facturacion');

// Obtiene todas las facturas
exports.getAll = async (req, res) => {
    try {
        const rows = await Facturacion.findAll();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las facturas', error: error.message });
    }
};

// Obtiene una factura por su ID
exports.getById = async (req, res) => {
    try {
        const row = await Facturacion.findByPk(req.params.id);
        if (!row) return res.status(404).json({ message: 'Factura no encontrada' });
        res.json(row);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la factura', error: error.message });
    }
};

// Crea una nueva factura
exports.create = async (req, res) => {
    try {
        const created = await Facturacion.create(req.body);
        res.status(201).json(created);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la factura', error: error.message });
    }
};

// Actualiza una factura existente
exports.update = async (req, res) => {
    try {
        const row = await Facturacion.findByPk(req.params.id);
        if (!row) return res.status(404).json({ message: 'Factura no encontrada' });
        await row.update(req.body);
        res.json(row);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la factura', error: error.message });
    }
};

// Elimina una factura
exports.delete = async (req, res) => {
    try {
        const row = await Facturacion.findByPk(req.params.id);
        if (!row) return res.status(404).json({ message: 'Factura no encontrada' });
        await row.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la factura', error: error.message });
    }
};
