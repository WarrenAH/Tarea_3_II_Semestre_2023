const conexion = require('../AccesoDatos/Conexion.js');
const sql = require("mssql/msnodesqlv8");

class ModeloPersona {
    async Obtener() {
        try {
          await conexion.connect();
          const result = await conexion.request().query('exec obtener_persona');
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
            .query('exec buscar_persona @id');
          return result.recordset;
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Crear(cedula, nombre, segundo_nombre, apellido, segundo_apellido, edad) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('cedula', sql.VarChar, cedula)
            .input('nombre', sql.VarChar, nombre)
            .input('segundo_nombre', sql.VarChar, segundo_nombre)
            .input('apellido', sql.VarChar, apellido)
            .input('segundo_apellido', sql.VarChar, segundo_apellido)
            .input('edad', sql.Int, edad)
            .query('exec crear_persona @cedula, @nombre, @segundo_nombre, @apellido, @segundo_apellido, @edad');
          return 'Insercion en persona.';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Actualizar(id, cedula, nombre, segundo_nombre, apellido, segundo_apellido, edad) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id', sql.Int, id)
            .input('cedula', sql.VarChar, cedula)
            .input('nombre', sql.VarChar, nombre)
            .input('segundo_nombre', sql.VarChar, segundo_nombre)
            .input('apellido', sql.VarChar, apellido)
            .input('segundo_apellido', sql.VarChar, segundo_apellido)
            .input('edad', sql.Int, edad)
            .query('exec actualizar_persona @id, @cedula, @nombre, @segundo_nombre, @apellido, @segundo_apellido, @edad');
          return 'Actualizacion en persona.';
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
            .query('exec eliminar_persona @id');
          return 'Eliminacion en persona';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }
    
}

module.exports = ModeloPersona;