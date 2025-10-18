const Class = require('../models/Class');

//Obtiene todas las clases registradas
exports.getAll = async (req, res) => {
    try {
        const rows = await Class.findAll();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las clases', error: error.message });
    }
};


//Obtiene una clase específica por su ID

exports.getById = async (req, res) => {
    try {
        const row = await Class.findByPk(req.params.id);
        if (!row) return res.status(404).json({ message: 'Clase no encontrada' });
        res.json(row);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la clase', error: error.message });
    }
};

// Crea una nueva clase
exports.create = async (req, res) => {
    try {
        const created = await Class.create(req.body);
        res.status(201).json(created);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la clase', error: error.message });
    }
};

// Actualiza una clase existente por su ID
exports.update = async (req, res) => {
    try {
        const row = await Class.findByPk(req.params.id);
        if (!row) return res.status(404).json({ message: 'Clase no encontrada' });
        await row.update(req.body);
        res.json(row);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la clase', error: error.message });
    }
};


//Elimina una clase por su ID

exports.delete = async (req, res) => {
    try {
        const row = await Class.findByPk(req.params.id);
        if (!row) return res.status(404).json({ message: 'Clase no encontrada' });
        await row.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la clase', error: error.message });
    }
};
