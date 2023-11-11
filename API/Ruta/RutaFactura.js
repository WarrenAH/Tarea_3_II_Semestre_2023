const express = require('express');
const router = express.Router();
const controladorFactura = require('../Controlador/ControladorFactura.js');

router.get('/api/factura', controladorFactura.Obtener);
router.get('/api/factura/:id', controladorFactura.Buscar);
router.post('/api/facturas', controladorFactura.Crear);
router.put('/api/facturas/:id', controladorFactura.Actualizar);
router.delete('/api/facturas/:id', controladorFactura.Eliminar);

module.exports = router;