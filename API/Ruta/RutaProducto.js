const express = require('express');
const router = express.Router();
const controladorProducto = require('../Controlador/ControladorProducto.js');

router.get('/api/producto', controladorProducto.Obtener);
router.get('/api/producto/:id', controladorProducto.Buscar);
router.post('/api/productos', controladorProducto.Crear);
router.put('/api/productos/:id', controladorProducto.Actualizar);
router.delete('/api/productos/:id', controladorProducto.Eliminar);

module.exports = router;