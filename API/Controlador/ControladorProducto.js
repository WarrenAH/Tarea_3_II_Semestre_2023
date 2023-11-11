const producto = require('../Modelo/ModeloProducto.js');

const modeloProducto = new producto();

async function Obtener(req, res) {
  try {
    const producto = await modeloProducto.Obtener();
    res.json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Buscar(req, res) {
  const { id } = req.params;
  try {
    const producto = await modeloProducto.Buscar(id);
    res.json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Crear(req, res) {
  const { nombre, modelo, marca, inversion, venta, descuento, unidad } = req.body;
  try {
    const resultado = await modeloProducto.Crear(nombre, modelo, marca, inversion, venta, descuento, unidad);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Actualizar(req, res) {
  const { id } = req.params;
  const { nombre, modelo, marca, inversion, venta, descuento, unidad } = req.body;
  try {
    const resultado = await modeloProducto.Actualizar(id, nombre, modelo, marca, inversion, venta, descuento, unidad);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Eliminar(req, res) {
  const { id } = req.params;
  try {
    const resultado = await modeloProducto.Eliminar(id);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  Obtener,
  Buscar,
  Crear,
  Actualizar,
  Eliminar,
};