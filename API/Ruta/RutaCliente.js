const express = require('express');
const router = express.Router();
const controladorCliente = require('../Controlador/ControladorCliente.js');

router.get('/api/cliente', controladorCliente.Obtener);
router.get('/api/cliente/:id', controladorCliente.Buscar);
router.post('/api/clientes', controladorCliente.Crear);
router.put('/api/clientes/:id', controladorCliente.Actualizar);
router.delete('/api/clientes/:id', controladorCliente.Eliminar);

module.exports = router;