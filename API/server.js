const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const moment = require('moment');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const rutaPersona = require('./Ruta/RutaPersona.js');
const rutaSucursal = require('./Ruta/RutaSucursal.js');
const rutaProducto = require('./Ruta/RutaProducto.js');
const rutaEmpleado = require('./Ruta/RutaEmpleado.js');
const rutaCliente = require('./Ruta/RutaCliente.js');
const rutaUsuario = require('./Ruta/RutaUsuario.js');
const rutaRol= require('./Ruta/RutaRol.js');
const rutaTiene = require('./Ruta/RutaTiene.js');
const rutaEncabezadoFactura = require('./Ruta/RutaEncabezadoFactura.js');
const rutaDetalleFactura = require('./Ruta/RutaDetalleFactura.js');
const rutaFactura = require('./Ruta/RutaFactura.js');

app.use('/', rutaPersona); // Rutas para persona
app.use('/', rutaSucursal); // Rutas para sucursal
app.use('/', rutaProducto); // Rutas para producto
app.use('/', rutaEmpleado); // Rutas para empleado
app.use('/', rutaCliente); // Rutas para cliente
app.use('/', rutaUsuario); // Rutas para usuario
app.use('/', rutaRol); // Rutas para rol
app.use('/', rutaTiene); // Rutas para tiene
app.use('/', rutaEncabezadoFactura); // Rutas para encabezado_factura
app.use('/', rutaDetalleFactura); // Rutas para detalle_factura
app.use('/', rutaFactura); // Rutas para factura

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de TECSoftware');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});


