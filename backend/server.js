const express = require('express');
const pool = require('./config/db'); // Asegúrate de que la ruta sea correcta
const bicicletasController = require('./controllers/bicicletasController');
const authController = require('./controllers/authController');
const authenticateToken = require('./middleware/authenticateToken');
const http = require('http');
const socketIo = require('socket.io');

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
app.get('/bicicletas', bicicletasController.getBicicletas);
app.post('/bicicletas', bicicletasController.createBicicleta);

// Rutas de autenticación
app.post('/register', authController.register);
app.post('/login', authController.login);

// Ruta protegida
app.get('/ruta-protegida', authenticateToken, (req, res) => {
    res.send('Esta es una ruta protegida');
});

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');
    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

const PORT = 3003;
server.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});