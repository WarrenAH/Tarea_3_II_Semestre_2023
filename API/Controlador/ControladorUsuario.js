const usuario = require('../Modelo/ModeloUsuario.js');

const modeloUsuario = new usuario();

async function Obtener(req, res) {
  try {
    const usuario = await modeloUsuario.Obtener();
    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Buscar(req, res) {
  const { id } = req.params;
  try {
    const usuario = await modeloUsuario.Buscar(id);
    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Crear(req, res) {
  const { id_empleado, correo, clave } = req.body;
  try {
    const resultado = await modeloUsuario.Crear(id_empleado, correo, clave);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Actualizar(req, res) {
  const { id } = req.params;
  const { id_empleado, correo, clave } = req.body;
  try {
    const resultado = await modeloUsuario.Actualizar(id, id_empleado, correo, clave);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Eliminar(req, res) {
  const { id } = req.params;
  try {
    const resultado = await modeloUsuario.Eliminar(id);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function Iniciar_Sesion(req, res) {
  const { correo, clave } = req.body;
  try {
    const resultado = await modeloUsuario.Iniciar_Sesion(correo, clave);
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
  Iniciar_Sesion,
};