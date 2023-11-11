const express = require('express');
const router = express.Router();
const controladorSucursal = require('../Controlador/ControladorSucursal.js');

router.get('/api/sucursal', controladorSucursal.Obtener);
router.get('/api/sucursal/:id', controladorSucursal.Buscar);
router.post('/api/sucursales', controladorSucursal.Crear);
router.put('/api/sucursales/:id', controladorSucursal.Actualizar);
router.delete('/api/sucursales/:id', controladorSucursal.Eliminar);

module.exports = router;