const cliente = require('../Modelo/ModeloCliente.js');

const modeloCliente = new cliente();

async function Obtener(req, res) {
  try {
    const cliente = await modeloCliente.Obtener();
    res.json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Buscar(req, res) {
  const { id } = req.params;
  try {
    const cliente = await modeloCliente.Buscar(id);
    res.json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Crear(req, res) {
  const { id_persona, fecha_ingreso } = req.body;
  try {
    const resultado = await modeloCliente.Crear(id_persona, fecha_ingreso);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Actualizar(req, res) {
  const { id } = req.params;
  const { id_persona, fecha_ingreso } = req.body;
  try {
    const resultado = await modeloCliente.Actualizar(id, id_persona, fecha_ingreso);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Eliminar(req, res) {
  const { id } = req.params;
  try {
    const resultado = await modeloCliente.Eliminar(id);
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