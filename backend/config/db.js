const { Pool } = require('pg');

const pool = new Pool({
  user: 'app_user',       // Usuario que creaste en PostgreSQL
  host: 'localhost',      // Servidor local
  database: 'bicicletas_db', // Nombre de la base de datos
  password: 'admin', // Contraseña del usuario
  port: 5432, 
});

module.exports = pool;