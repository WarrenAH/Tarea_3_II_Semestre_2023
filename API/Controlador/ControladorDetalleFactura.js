const detalleFactura = require('../Modelo/ModeloDetalleFactura.js');

const modeloDetalleFactura = new detalleFactura();

async function Obtener(req, res) {
  try {
    const detalleFactura = await modeloDetalleFactura.Obtener();
    res.json(detalleFactura);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Buscar(req, res) {
  const { id } = req.params;
  try {
    const detalleFactura = await modeloDetalleFactura.Buscar(id);
    res.json(detalleFactura);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Crear(req, res) {
  const { id_encabezado_factura, id_cliente, id_producto, subtotal, total, impuesto, cantidad } = req.body;
  try {
    const resultado = await modeloDetalleFactura.Crear(id_encabezado_factura, id_cliente, id_producto, subtotal, total, impuesto, cantidad);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Actualizar(req, res) {
  const { id } = req.params;
  const { id_encabezado_factura, id_cliente, id_producto, subtotal, total, impuesto, cantidad } = req.body;
  try {
    const resultado = await modeloDetalleFactura.Actualizar(id, id_encabezado_factura, id_cliente, id_producto, subtotal, total, impuesto, cantidad);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Eliminar(req, res) {
  const { id } = req.params;
  try {
    const resultado = await modeloDetalleFactura.Eliminar(id);
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