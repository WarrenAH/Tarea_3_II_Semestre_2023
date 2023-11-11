const persona = require('../Modelo/ModeloPersona.js');

const modeloPersona = new persona();

async function Obtener(req, res) {
  try {
    const persona = await modeloPersona.Obtener();
    res.json(persona);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Buscar(req, res) {
  const { id } = req.params;
  try {
    const persona = await modeloPersona.Buscar(id);
    res.json(persona);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Crear(req, res) {
  const { cedula, nombre, segundo_nombre, apellido, segundo_apellido, edad } = req.body;
  try {
    const resultado = await modeloPersona.Crear(cedula, nombre, segundo_nombre, apellido, segundo_apellido, edad);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Actualizar(req, res) {
  const { id } = req.params;
  const { cedula, nombre, segundo_nombre, apellido, segundo_apellido, edad } = req.body;
  try {
    const resultado = await modeloPersona.Actualizar(id, cedula, nombre, segundo_nombre, apellido, segundo_apellido, edad);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Eliminar(req, res) {
  const { id } = req.params;
  try {
    const resultado = await modeloPersona.Eliminar(id);
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