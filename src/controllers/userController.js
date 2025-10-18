const User = require('../models/User');

//Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({ attributes: { exclude: ['password'] } });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
    }
};

//Obtener Usuario por ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, { attributes: { exclude: ['password'] } });
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuario', error: error.message });
    }
};

//Crear usuario
exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const safe = newUser.toJSON();
        delete safe.password;
        res.status(201).json(safe);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear usuario', error: error.message });
    }
};

//Actualizar Usuario
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        await user.update(req.body);
        const safe = user.toJSON();
        delete safe.password;
        res.json(safe);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar usuario', error: error.message });
    }
};

//Eliminar Usuario
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        await user.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar usuario', error: error.message });
    }
};