const conexion = require('../AccesoDatos/Conexion.js');
const sql = require("mssql/msnodesqlv8");

class ModeloRol {
    async Obtener() {
        try {
          await conexion.connect();
          const result = await conexion.request().query('exec obtener_rol');
          return result.recordset;
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Buscar(id) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id', sql.Int, id)
            .query('exec buscar_rol @id');
          return result.recordset;
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Crear(descripcion) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('descripcion', sql.VarChar, descripcion)
            .query('exec crear_rol @descripcion');
          return 'Insercion en rol.';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Actualizar(id, descripcion) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id', sql.Int, id)
            .input('descripcion', sql.VarChar, descripcion)
            .query('exec actualizar_rol @id, @descripcion');
          return 'Actualizacion en rol.';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Eliminar(id) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id', sql.Int, id)
            .query('exec eliminar_rol @id');
          return 'Eliminacion en rol';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }
    
}

module.exports = ModeloRol;