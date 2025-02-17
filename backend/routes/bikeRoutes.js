const express = require('express');
const { getBicicletas, createBicicleta } = require('../controllers/bicicletasController');

const router = express.Router();

router.get('/bicicletas', getBicicletas);
router.post('/bicicletas', createBicicleta);

module.exports = router;