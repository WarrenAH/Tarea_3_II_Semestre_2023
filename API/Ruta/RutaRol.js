const express = require('express');
const router = express.Router();
const controladorRol= require('../Controlador/ControladorRol.js');

router.get('/api/rol', controladorRol.Obtener);
router.get('/api/rol/:id', controladorRol.Buscar);
router.post('/api/roles', controladorRol.Crear);
router.put('/api/roles/:id', controladorRol.Actualizar);
router.delete('/api/roles/:id', controladorRol.Eliminar);

module.exports = router;