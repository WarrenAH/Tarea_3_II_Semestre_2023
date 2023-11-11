const conexion = require('../AccesoDatos/Conexion.js');
const sql = require("mssql/msnodesqlv8");

class ModeloEmpleado {
    async Obtener() {
        try {
          await conexion.connect();
          const result = await conexion.request().query('exec obtener_empleado');
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
            .query('exec buscar_empleado @id');
          return result.recordset;
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Crear(id_persona, id_sucursal, sueldo) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id_persona', sql.Int, id_persona)
            .input('id_sucursal', sql.Int, id_sucursal)
            .input('sueldo', sql.Int, sueldo)
            .query('exec crear_empleado @id_persona, @id_sucursal, @sueldo');
          return 'Insercion en empleado.';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Actualizar(id, id_persona, id_sucursal, sueldo) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id', sql.Int, id)
            .input('id_persona', sql.Int, id_persona)
            .input('id_sucursal', sql.Int, id_sucursal)
            .input('sueldo', sql.Int, sueldo)
            .query('exec actualizar_empleado @id, @id_persona, @id_sucursal, @sueldo');
          return 'Actualizacion en empleado.';
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
            .query('exec eliminar_empleado @id');
          return 'Eliminacion en empleado';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }
    
}

module.exports = ModeloEmpleado;