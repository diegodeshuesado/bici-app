const express = require('express');
const pool = require('./config/db'); // Asegúrate de que la ruta sea correcta
const bicicletasController = require('./controllers/bicicletasController');

const app = express();
app.use(express.json()); // Para poder leer el cuerpo de las solicitudes en formato JSON

// Ruta de prueba para verificar la conexión a la base de datos
app.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT NOW()');
        res.json({ message: 'Conexión exitosa', time: rows[0].now });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al conectar a la base de datos');
    }
});

// Rutas para bicicletas
const { getBicicletas, createBicicleta } = require('../controllers/bicicletasController');

const router = express.Router();

router.get('/bicicletas', getBicicletas);
router.post('/bicicletas', createBicicleta);

module.exports = router;

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

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

