const express = require('express');
const router = express.Router();
const controladorTiene= require('../Controlador/ControladorTiene.js');

router.get('/api/tiene', controladorTiene.Obtener);
router.get('/api/tiene/:id_usuario,:id_rol', controladorTiene.Buscar);
router.post('/api/tienen', controladorTiene.Crear);
router.put('/api/tienen/:id_usuario,:id_rol', controladorTiene.Actualizar);
router.delete('/api/tienen/:id_usuario,:id_rol', controladorTiene.Eliminar);

module.exports = router;