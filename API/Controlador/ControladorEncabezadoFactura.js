const encabezadoFactura = require('../Modelo/ModeloEncabezadoFactura.js');

const modeloEncabezadoFactura = new encabezadoFactura();

async function Obtener(req, res) {
  try {
    const encabezadoFactura = await modeloEncabezadoFactura.Obtener();
    res.json(encabezadoFactura);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Buscar(req, res) {
  const { id } = req.params;
  try {
    const encabezadoFactura = await modeloEncabezadoFactura.Buscar(id);
    res.json(encabezadoFactura);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Crear(req, res) {
  const { id_usuario, fecha } = req.body;
  try {
    const resultado = await modeloEncabezadoFactura.Crear(id_usuario, fecha);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Actualizar(req, res) {
  const { id } = req.params;
  const { id_usuario, fecha } = req.body;
  try {
    const resultado = await modeloEncabezadoFactura.Actualizar(id, id_usuario, fecha);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Eliminar(req, res) {
  const { id } = req.params;
  try {
    const resultado = await modeloEncabezadoFactura.Eliminar(id);
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