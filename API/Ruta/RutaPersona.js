const express = require('express');
const router = express.Router();
const controladorPersona = require('../Controlador/ControladorPersona.js');

router.get('/api/persona', controladorPersona.Obtener);
router.get('/api/persona/:id', controladorPersona.Buscar);
router.post('/api/personas', controladorPersona.Crear);
router.put('/api/personas/:id', controladorPersona.Actualizar);
router.delete('/api/personas/:id', controladorPersona.Eliminar);

module.exports = router;