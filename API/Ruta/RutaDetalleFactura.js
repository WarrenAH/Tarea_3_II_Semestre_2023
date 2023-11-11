const express = require('express');
const router = express.Router();
const controladorDetalleFactura= require('../Controlador/ControladorDetalleFactura.js');

router.get('/api/detalle_factura', controladorDetalleFactura.Obtener);
router.get('/api/detalle_factura/:id', controladorDetalleFactura.Buscar);
router.post('/api/detalles_factura', controladorDetalleFactura.Crear);
router.put('/api/detalles_factura/:id', controladorDetalleFactura.Actualizar);
router.delete('/api/detalles_factura/:id', controladorDetalleFactura.Eliminar);

module.exports = router;