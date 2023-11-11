const conexion = require('../AccesoDatos/Conexion.js');
const sql = require("mssql/msnodesqlv8");

class ModeloSucursal {
    async Obtener() {
        try {
          await conexion.connect();
          const result = await conexion.request().query('exec obtener_sucursal');
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
            .query('exec buscar_sucursal @id');
          return result.recordset;
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Crear(telefono, direccion) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('telefono', sql.VarChar, telefono)
            .input('direccion', sql.VarChar, direccion)
            .query('exec crear_sucursal @telefono, @direccion');
          return 'Insercion en sucursal.';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Actualizar(id, telefono, direccion) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id', sql.Int, id)
            .input('telefono', sql.VarChar, telefono)
            .input('direccion', sql.VarChar, direccion)
            .query('exec actualizar_sucursal @id, @telefono, @direccion');
          return 'Actualizacion en sucursal.';
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
            .query('exec eliminar_sucursal @id');
          return 'Eliminacion en sucursal';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }
    
}

module.exports = ModeloSucursal;