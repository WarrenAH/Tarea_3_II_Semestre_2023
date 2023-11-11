const ModeloFactura = require('../Modelo/ModeloFactura.js');
const factura = require('../Modelo/ModeloFactura.js');

const modeloFactura = new factura();

async function Obtener(req, res) {
  try {
    const factura = await modeloFactura.Obtener();
    res.json(factura);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Buscar(req, res) {
  const { id } = req.params;
  try {
    const factura = await modeloFactura.Buscar(id);
    res.json(factura);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Crear(req, res) {
  const { id_usuario, fecha, id_cliente, id_producto, cantidad } = req.body;
  try {
    const resultado = await modeloFactura.Crear(id_usuario, fecha, id_cliente, id_producto, cantidad);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Actualizar(req, res) {
  const { id } = req.params;
  const { id_encabezado_factura, id_usuario, fecha, id_cliente, id_producto, subtotal, total, impuesto, cantidad } = req.body;
  try {
    const resultado = await modeloFactura.Actualizar(id, id_encabezado_factura, id_usuario, fecha, id_cliente, id_producto, subtotal, total, impuesto, cantidad);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Eliminar(req, res) {
  const { id } = req.params;
  try {
    const resultado = await modeloFactura.Eliminar(id);
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