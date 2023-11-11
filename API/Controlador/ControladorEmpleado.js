const empleado = require('../Modelo/ModeloEmpleado.js');

const modeloEmpleado = new empleado();

async function Obtener(req, res) {
  try {
    const empleado = await modeloEmpleado.Obtener();
    res.json(empleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Buscar(req, res) {
  const { id } = req.params;
  try {
    const empleado = await modeloEmpleado.Buscar(id);
    res.json(empleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Crear(req, res) {
  const { id_persona, id_sucursal, sueldo } = req.body;
  try {
    const resultado = await modeloEmpleado.Crear(id_persona, id_sucursal, sueldo);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Actualizar(req, res) {
  const { id } = req.params;
  const { id_persona, id_sucursal, sueldo } = req.body;
  try {
    const resultado = await modeloEmpleado.Actualizar(id, id_persona, id_sucursal, sueldo);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Eliminar(req, res) {
  const { id } = req.params;
  try {
    const resultado = await modeloEmpleado.Eliminar(id);
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