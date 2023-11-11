const express = require('express');
const router = express.Router();
const controladorEncabezadoFactura= require('../Controlador/ControladorEncabezadoFactura.js');

router.get('/api/encabezado_factura', controladorEncabezadoFactura.Obtener);
router.get('/api/encabezado_factura/:id', controladorEncabezadoFactura.Buscar);
router.post('/api/encabezados_factura', controladorEncabezadoFactura.Crear);
router.put('/api/encabezados_factura/:id', controladorEncabezadoFactura.Actualizar);
router.delete('/api/encabezados_factura/:id', controladorEncabezadoFactura.Eliminar);

module.exports = router;