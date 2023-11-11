const conexion = require('../AccesoDatos/Conexion.js');
const sql = require("mssql/msnodesqlv8");

class ModeloEncabezadoFactura {
    async Obtener() {
        try {
          await conexion.connect();
          const result = await conexion.request().query('exec obtener_encabezado_factura');
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
            .query('exec buscar_encabezado_factura @id');
          return result.recordset;
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Crear(id_usuario, fecha) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id_usuario', sql.Int, id_usuario)
            .input('fecha', sql.DateTime, fecha)
            .query('exec crear_encabezado_factura @id_usuario, @fecha');
          return 'Insercion en encabezado_factura.';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Actualizar(id, id_usuario, fecha) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id', sql.Int, id)
            .input('id_usuario', sql.Int, id_usuario)
            .input('fecha', sql.DateTime, fecha)
            .query('exec actualizar_encabezado_factura @id, @id_usuario, @fecha');
          return 'Actualizacion en encabezado_factura.';
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
            .query('exec eliminar_encabezado_factura @id');
          return 'Eliminacion en encabezado_factura';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }
    
}

module.exports = ModeloEncabezadoFactura;