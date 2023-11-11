const conexion = require('../AccesoDatos/Conexion.js');
const sql = require("mssql/msnodesqlv8");

class ModeloTiene {
    async Obtener() {
        try {
          await conexion.connect();
          const result = await conexion.request().query('exec obtener_tiene');
          return result.recordset;
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Buscar(id_usuario, id_rol) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id_usuario', sql.Int, id_usuario)
            .input('id_rol', sql.Int, id_rol)
            .query('exec buscar_tiene @id_usuario, @id_rol');
          return result.recordset;
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Crear(id_usuario, id_rol) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id_usuario', sql.Int, id_usuario)
            .input('id_rol', sql.Int, id_rol)
            .query('exec crear_tiene @id_usuario, @id_rol');
          return 'Insercion en tiene.';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Actualizar(id_usuario, id_rol, id_usuario_nuevo, id_rol_nuevo) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id_usuario', sql.Int, id_usuario)
            .input('id_rol', sql.Int, id_rol)
            .input('id_usuario_nuevo', sql.Int, id_usuario_nuevo)
            .input('id_rol_nuevo', sql.Int, id_rol_nuevo)
            .query('exec actualizar_tiene @id_usuario, @id_rol, @id_usuario_nuevo, @id_rol_nuevo');
          return 'Actualizacion en tiene.';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Eliminar(id_usuario, id_rol) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id_usuario', sql.Int, id_usuario)
            .input('id_rol', sql.Int, id_rol)
            .query('exec eliminar_tiene @id_usuario, @id_rol');
          return 'Eliminacion en tiene';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }
    
}

module.exports = ModeloTiene;