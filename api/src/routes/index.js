const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Otras rutas...
// router.get('/otra-ruta', (req, res) => { /* ... */ });

module.exports = router;
