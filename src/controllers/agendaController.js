const Agenda = require('../models/Agenda');


/*   Obtiene todas las entradas de la agenda
 */
exports.getAll = async (req, res) => {
    try {
        const rows = await Agenda.findAll();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la agenda', error: error.message });
    }
};


/* Obtiene una entrada de agenda por su ID */


exports.getById = async (req, res) => {
    try {
        const row = await Agenda.findByPk(req.params.id);
        if (!row) return res.status(404).json({ message: 'Entrada no encontrada' });
        res.json(row);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la entrada', error: error.message });
    }
};


//Crea una nueva entrada en la agenda

exports.create = async (req, res) => {
    try {
        const created = await Agenda.create(req.body);
        res.status(201).json(created);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la entrada', error: error.message });
    }
};


// Actualiza una entrada existente de la agenda

exports.update = async (req, res) => {
    try {
        const row = await Agenda.findByPk(req.params.id);
        if (!row) return res.status(404).json({ message: 'Entrada no encontrada' });
        await row.update(req.body);
        res.json(row);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la entrada', error: error.message });
    }
};


 //Elimina una entrada de la agenda

exports.delete = async (req, res) => {
    try {
        const row = await Agenda.findByPk(req.params.id);
        if (!row) return res.status(404).json({ message: 'Entrada no encontrada' });
        await row.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la entrada', error: error.message });
    }
};