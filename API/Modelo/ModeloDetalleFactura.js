const conexion = require('../AccesoDatos/Conexion.js');
const sql = require("mssql/msnodesqlv8");

class ModeloDetalleFactura {
    async Obtener() {
        try {
          await conexion.connect();
          const result = await conexion.request().query('exec obtener_detalle_factura');
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
            .query('exec buscar_detalle_factura @id');
          return result.recordset;
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Crear(id_encabezado_factura, id_cliente, id_producto, subtotal, total, impuesto, cantidad) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id_encabezado_factura', sql.Int, id_encabezado_factura)
            .input('id_cliente', sql.Int, id_cliente)
            .input('id_producto', sql.Int, id_producto)
            .input('subtotal', sql.Int, subtotal)
            .input('total', sql.Int, total)
            .input('impuesto', sql.Int, impuesto)
            .input('cantidad', sql.Int, cantidad)
            .query('exec crear_detalle_factura @id_encabezado_factura, @id_cliente, @id_producto, @subtotal, @total, @impuesto, @cantidad');
          return 'Insercion en detalle_factura.';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Actualizar(id, id_encabezado_factura, id_cliente, id_producto, subtotal, total, impuesto, cantidad) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id', sql.Int, id)
            .input('id_encabezado_factura', sql.Int, id_encabezado_factura)
            .input('id_cliente', sql.Int, id_cliente)
            .input('id_producto', sql.Int, id_producto)
            .input('subtotal', sql.Int, subtotal)
            .input('total', sql.Int, total)
            .input('impuesto', sql.Int, impuesto)
            .input('cantidad', sql.Int, cantidad)
            .query('exec actualizar_detalle_factura @id, @id_encabezado_factura, @id_cliente, @id_producto, @subtotal, @total, @impuesto, @cantidad');
          return 'Actualizacion en detalle_factura.';
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
            .query('exec eliminar_detalle_factura @id');
          return 'Eliminacion en detalle_factura';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }
    
}

module.exports = ModeloDetalleFactura;