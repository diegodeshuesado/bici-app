const { Pool } = require('pg');
require('dotenv').config(); // Cargar variables de entorno

const pool = new Pool({
  user: process.env.DB_USER,       // Usuario desde .env
  host: process.env.DB_HOST,      // Host desde .env
  database: process.env.DB_NAME,  // Nombre de la base de datos desde .env
  password: process.env.DB_PASSWORD, // Contraseña desde .env
  port: process.env.DB_PORT,      // Puerto desde .env
});

module.exports = pool;