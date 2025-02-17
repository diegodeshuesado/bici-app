const pool = require('../config/db');

// Obtener todas las bicicletas
const getBicicletas = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM bicicletas');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener las bicicletas');
    }
};

// Crear una nueva bicicleta
const createBicicleta = async (req, res) => {
    const { nombre, estado } = req.body;
    try {
        const { rows } = await pool.query(
            'INSERT INTO bicicletas (nombre, estado) VALUES ($1, $2) RETURNING *',
            [nombre, estado]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear la bicicleta');
    }
};

// Exportar las funciones
module.exports = {
    getBicicletas,
    createBicicleta,
};