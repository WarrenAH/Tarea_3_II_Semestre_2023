const conexion = require('../AccesoDatos/Conexion.js');
const sql = require("mssql/msnodesqlv8");

class ModeloCliente {
    async Obtener() {
        try {
          await conexion.connect();
          const result = await conexion.request().query('exec obtener_cliente');
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
            .query('exec buscar_cliente @id');
          return result.recordset;
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Crear(id_persona, fecha_ingreso) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id_persona', sql.Int, id_persona)
            .input('fecha_ingreso', sql.DateTime, fecha_ingreso)
            .query('exec crear_cliente @id_persona, @fecha_ingreso');
          return 'Insercion en cliente.';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Actualizar(id, id_persona, fecha_ingreso) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id', sql.Int, id)
            .input('id_persona', sql.Int, id_persona)
            .input('fecha_ingreso', sql.DateTime, fecha_ingreso)
            .query('exec actualizar_cliente @id, @id_persona, @fecha_ingreso');
          return 'Actualizacion en cliente.';
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
            .query('exec eliminar_cliente @id');
          return 'Eliminacion en cliente';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }
    
}

module.exports = ModeloCliente;