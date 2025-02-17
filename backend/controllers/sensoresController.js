const pool = require('../config/db');

// Obtener todos los datos de los sensores
const getDatosSensores = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM datos_sensores');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los datos de los sensores');
    }
};

// Crear un nuevo dato de sensor
const createDatoSensor = async (req, res) => {
    const { bicicleta_id, velocidad, distancia, nivel_bateria } = req.body;
    try {
        const { rows } = await pool.query(
            'INSERT INTO datos_sensores (bicicleta_id, velocidad, distancia, nivel_bateria) VALUES ($1, $2, $3, $4) RETURNING *',
            [bicicleta_id, velocidad, distancia, nivel_bateria]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear el dato del sensor');
    }
};

module.exports = {
    getDatosSensores,
    createDatoSensor,
};