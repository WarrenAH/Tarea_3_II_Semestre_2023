const conexion = require('../AccesoDatos/Conexion.js');
const sql = require("mssql/msnodesqlv8");

class ModeloProducto{
    async Obtener() {
        try {
          await conexion.connect();
          const result = await conexion.request().query('exec obtener_producto');
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
            .query('exec buscar_producto @id');
          return result.recordset;
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Crear(nombre, modelo, marca, inversion, venta, descuento, unidad) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('nombre', sql.VarChar, nombre)
            .input('modelo', sql.VarChar, modelo)
            .input('marca', sql.VarChar, marca)
            .input('inversion', sql.Int, inversion)
            .input('venta', sql.Int, venta)
            .input('descuento', sql.Int, descuento)
            .input('unidad', sql.Int, unidad)
            .query('exec crear_producto @nombre, @modelo, @marca, @inversion, @venta, @descuento, @unidad');
          return 'Insercion en producto.';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }

    async Actualizar(id, nombre, modelo, marca, inversion, venta, descuento, unidad) {
        try {
          await conexion.connect();
          const result = await conexion
            .request()
            .input('id', sql.Int, id)
            .input('nombre', sql.VarChar, nombre)
            .input('modelo', sql.VarChar, modelo)
            .input('marca', sql.VarChar, marca)
            .input('inversion', sql.Int, inversion)
            .input('venta', sql.Int, venta)
            .input('descuento', sql.Int, descuento)
            .input('unidad', sql.Int, unidad)
            .query('exec actualizar_producto @id, @nombre, @modelo, @marca, @inversion, @venta, @descuento, @unidad');
          return 'Actualizacion en producto.';
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
            .query('exec eliminar_producto @id');
          return 'Eliminacion en producto';
        } catch (error) {
          throw error;
        } finally {
          conexion.close();
        }
    }
    
}

module.exports = ModeloProducto;