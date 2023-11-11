const conexion = require('../AccesoDatos/Conexion.js');
const sql = require("mssql/msnodesqlv8");

class ModeloFactura {
    async Obtener() {
        try {
          await conexion.connect();
          const result = await conexion.request().query('exec obtener_factura');
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
            .query('exec buscar_factura @id');
          return result.recordset;
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Crear(id_usuario, fecha, id_cliente, id_producto, cantidad) {
      try {
        await conexion.connect();
        const request = conexion.request();
        request.input('id_usuario', sql.Int, id_usuario);
        request.input('fecha', sql.VarChar, fecha);
        request.input('id_cliente', sql.Int, id_cliente);
        request.input('id_producto', sql.Int, id_producto);
        request.input('cantidad', sql.Int, cantidad);
        request.output('informacion', sql.Int);
        const result = await request.execute('crear_factura');
    
        const informacion = result.output.informacion;
        return informacion;
      } catch (error) {
        throw error;
      } finally {
        conexion.close();
      }
    }

    async Actualizar(id, id_encabezado_factura, id_usuario, fecha, id_cliente, id_producto, subtotal, total, impuesto, cantidad) {
      try {
        await conexion.connect();
        const request = conexion.request();
        request.input('id', sql.Int, id);
        request.input('id_encabezado_factura', sql.Int, id_encabezado_factura);
        request.input('id_usuario', sql.Int, id_usuario);
        request.input('fecha', sql.VarChar, fecha);
        request.input('id_cliente', sql.Int, id_cliente);
        request.input('id_producto', sql.Int, id_producto);
        request.input('subtotal', sql.Int, subtotal);
        request.input('total', sql.Int, total);
        request.input('impuesto', sql.Int, impuesto);
        request.input('cantidad', sql.Int, cantidad);
        request.output('informacion', sql.Int);
        const result = await request.execute('actualizar_factura');
    
        const informacion = result.output.informacion;
        return informacion;
      } catch (error) {
        throw error;
      } finally {
        conexion.close();
      }
    }

    async Eliminar(id) {
      try {
        await conexion.connect();
        const request = conexion.request();
        request.input('id', sql.Int, id);
        request.output('informacion', sql.Int);
        const result = await request.execute('eliminar_factura');
    
        const informacion = result.output.informacion;
        return informacion;
      } catch (error) {
        throw error;
      } finally {
        conexion.close();
      }
    }
    
}

module.exports = ModeloFactura;