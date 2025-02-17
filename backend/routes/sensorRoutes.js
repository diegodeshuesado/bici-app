const express = require('express');
const { getDatosSensores, createDatoSensor } = require('../controllers/sensoresController');

const router = express.Router();

router.get('/sensores', getDatosSensores);
router.post('/sensores', createDatoSensor);

module.exports = router;