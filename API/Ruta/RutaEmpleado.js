const express = require('express');
const router = express.Router();
const controladorEmpleado = require('../Controlador/ControladorEmpleado.js');

router.get('/api/empleado', controladorEmpleado.Obtener);
router.get('/api/empleado/:id', controladorEmpleado.Buscar);
router.post('/api/empleados', controladorEmpleado.Crear);
router.put('/api/empleados/:id', controladorEmpleado.Actualizar);
router.delete('/api/empleados/:id', controladorEmpleado.Eliminar);

module.exports = router;