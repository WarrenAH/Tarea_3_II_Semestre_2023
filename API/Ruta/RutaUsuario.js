const express = require('express');
const router = express.Router();
const controladorUsuario = require('../Controlador/ControladorUsuario.js');

router.get('/api/usuario', controladorUsuario.Obtener);
router.get('/api/usuario/:id', controladorUsuario.Buscar);
router.post('/api/usuarios', controladorUsuario.Crear);
router.put('/api/usuarios/:id', controladorUsuario.Actualizar);
router.delete('/api/usuarios/:id', controladorUsuario.Eliminar);
router.post('/api/usuarios/iniciar_sesion', controladorUsuario.Iniciar_Sesion);

module.exports = router;