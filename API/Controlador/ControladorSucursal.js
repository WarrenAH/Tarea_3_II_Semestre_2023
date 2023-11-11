const sucursal = require('../Modelo/ModeloSucursal.js');

const modeloSucursal = new sucursal();

async function Obtener(req, res) {
  try {
    const sucursal = await modeloSucursal.Obtener();
    res.json(sucursal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Buscar(req, res) {
  const { id } = req.params;
  try {
    const sucursal = await modeloSucursal.Buscar(id);
    res.json(sucursal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Crear(req, res) {
  const { telefono, direccion } = req.body;
  try {
    const resultado = await modeloSucursal.Crear(telefono, direccion);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Actualizar(req, res) {
  const { id } = req.params;
  const { telefono, direccion } = req.body;
  try {
    const resultado = await modeloSucursal.Actualizar(id, telefono, direccion);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Eliminar(req, res) {
  const { id } = req.params;
  try {
    const resultado = await modeloSucursal.Eliminar(id);
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