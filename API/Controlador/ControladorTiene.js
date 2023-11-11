const tiene = require('../Modelo/ModeloTiene.js');

const modeloTiene = new tiene();

async function Obtener(req, res) {
  try {
    const tiene = await modeloTiene.Obtener();
    res.json(tiene);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Buscar(req, res) {
  const { id_usuario, id_rol } = req.params;
  try {
    const tiene = await modeloTiene.Buscar(id_usuario, id_rol);
    res.json(tiene);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Crear(req, res) {
  const { id_usuario, id_rol } = req.body;
  try {
    const resultado = await modeloTiene.Crear(id_usuario, id_rol);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Actualizar(req, res) {
  const { id_usuario, id_rol } = req.params;
  const { id_usuario_nuevo, id_rol_nuevo } = req.body;
  try {
    const resultado = await modeloTiene.Actualizar(id_usuario, id_rol, id_usuario_nuevo, id_rol_nuevo);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Eliminar(req, res) {
  const { id_usuario, id_rol } = req.params;
  try {
    const resultado = await modeloTiene.Eliminar(id_usuario, id_rol);
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