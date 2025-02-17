const express = require('express');
const authRoutes = require('./routes/authRoutes');
const bikeRoutes = require('./routes/bikeRoutes');
const sensorRoutes = require('./routes/sensorRoutes');

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', bikeRoutes);
app.use('/api', sensorRoutes);

module.exports = app;