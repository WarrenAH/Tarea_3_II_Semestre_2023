const conexion = require('../AccesoDatos/Conexion.js');
const sql = require("mssql/msnodesqlv8");

class ModeloUsuario {
    async Obtener() {
        try {
          await conexion.connect();
          const result = await conexion.request().query('exec obtener_usuario');
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
            .query('exec buscar_usuario @id');
          return result.recordset;
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Crear(id_empleado, correo, clave) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id_empleado', sql.Int, id_empleado)
            .input('correo', sql.VarChar, correo)
            .input('clave', sql.VarChar, clave)
            .query('exec crear_usuario @id_empleado, @correo, @clave');
          return 'Insercion en usuario.';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Actualizar(id, id_empleado, correo, clave) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id', sql.Int, id)
            .input('id_empleado', sql.Int, id_empleado)
            .input('correo', sql.VarChar, correo)
            .input('clave', sql.VarChar, clave)
            .query('exec actualizar_usuario @id, @id_empleado, @correo, @clave');
          return 'Actualizacion en usuario.';
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
            .query('exec eliminar_usuario @id');
          return 'Eliminacion en usuario';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Iniciar_Sesion(correo, clave) {
      try {
        await conexion.connect();
        const request = conexion.request();
        request.input('correo', sql.VarChar, correo);
        request.input('clave', sql.VarChar, clave);
        request.output('informacion', sql.Int);
        const result = await request.execute('iniciar_sesion');
    
        const informacion = result.output.informacion;
        return informacion;
      } catch (error) {
        throw error;
      } finally {
        conexion.close();
      }
  }
    
}

module.exports = ModeloUsuario;