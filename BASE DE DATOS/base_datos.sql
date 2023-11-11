CREATE DATABASE tec_software
GO
USE tec_software
GO

--------------------------------------------------------------------------------------------------------------------------------------
--TABLAS Y RELACIONES
CREATE TABLE persona(
    id INT IDENTITY NOT NULL,
    cedula VARCHAR(30) NOT NULL UNIQUE,
    nombre VARCHAR(30) NOT NULL,
    segundo_nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    segundo_apellido VARCHAR(30) NOT NULL,
    edad INT NOT NULL,
    PRIMARY KEY(id)
);
GO

CREATE TABLE sucursal(
    id INT IDENTITY NOT NULL,
    telefono VARCHAR(30) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);
GO

CREATE TABLE producto(
    id INT IDENTITY NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    modelo VARCHAR(30) NOT NULL,
    marca VARCHAR(30) NOT NULL,
    inversion INT NOT NULL,
    venta INT NOT NULL,
    descuento INT NOT NULL,
    unidad INT NOT NULL,
    PRIMARY KEY(id)
);
GO

CREATE TABLE empleado(
    id INT IDENTITY NOT NULL,
    id_persona INT NOT NULL UNIQUE,
    id_sucursal INT NOT NULL,
    sueldo INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT FK_empleado_persona FOREIGN KEY(id_persona) REFERENCES persona(id),
    CONSTRAINT FK_empleado_sucursal FOREIGN KEY(id_sucursal) REFERENCES sucursal(id)
);
GO

CREATE TABLE cliente(
    id INT IDENTITY NOT NULL,
    id_persona INT NOT NULL UNIQUE,
    fecha_ingreso DATETIME NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT FK_cliente_persona FOREIGN KEY(id_persona) REFERENCES persona(id)
);
GO

CREATE TABLE usuario(
    id INT IDENTITY NOT NULL,
    id_empleado INT NOT NULL UNIQUE,
    correo VARCHAR(50) NOT NULL UNIQUE,
    clave VARCHAR(30) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT FK_usuario_empleado FOREIGN KEY(id_empleado) REFERENCES empleado(id)
);
GO

CREATE TABLE rol(
    id INT IDENTITY NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);
GO

CREATE TABLE tiene(
    id_usuario INT NOT NULL,
    id_rol INT NOT NULL,
    PRIMARY KEY(id_usuario, id_rol),
    CONSTRAINT FK_usuario_rol_usuario FOREIGN KEY(id_usuario) REFERENCES usuario(id),
    CONSTRAINT FK_usuario_rol_rol FOREIGN KEY(id_rol) REFERENCES rol(id)
);
GO

CREATE TABLE encabezado_factura(
    id INT IDENTITY NOT NULL,
    id_usuario INT NOT NULL,
    fecha DATETIME NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT FK_encabezado_factura_usuario FOREIGN KEY(id_usuario) REFERENCES usuario(id)
);
GO

CREATE TABLE detalle_factura(
    id INT IDENTITY NOT NULL,
    id_encabezado_factura INT NOT NULL UNIQUE,
    id_cliente INT NOT NULL,
    id_producto INT NOT NULL,
    subtotal INT NOT NULL,
    total INT NOT NULL,
    impuesto INT NOT NULL,
    cantidad INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT FK_detalle_factura_encabezado_factura FOREIGN KEY(id_encabezado_factura) REFERENCES encabezado_factura(id),
    CONSTRAINT FK_detalle_factura_cliente FOREIGN KEY(id_cliente) REFERENCES cliente(id),
    CONSTRAINT FK_detalle_factura_producto FOREIGN KEY(id_producto) REFERENCES producto(id)
);
GO

--------------------------------------------------------------------------------------------------------------------------------------
--TRIGGERS
CREATE TRIGGER tr_persona
ON persona
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    IF EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Actualizacion en persona.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM inserted)
    BEGIN
        RAISERROR('Insercion en persona.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Eliminacion en persona.', 0, 1) WITH NOWAIT;
        RETURN;
    END
END;
GO

CREATE TRIGGER tr_sucursal
ON sucursal
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    IF EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Actualizacion en sucursal.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM inserted)
    BEGIN
        RAISERROR('Insercion en sucursal.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Eliminacion en sucursal.', 0, 1) WITH NOWAIT;
        RETURN;
    END
END;
GO

CREATE TRIGGER tr_producto
ON producto
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    IF EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Actualizacion en producto.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM inserted)
    BEGIN
        RAISERROR('Insercion en producto.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Eliminacion en producto.', 0, 1) WITH NOWAIT;
        RETURN;
    END
END;
GO

CREATE TRIGGER tr_empleado
ON empleado
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    IF EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Actualizacion en empleado.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM inserted)
    BEGIN
        RAISERROR('Insercion en empleado.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Eliminacion en empleado.', 0, 1) WITH NOWAIT;
        RETURN;
    END
END;
GO

CREATE TRIGGER tr_cliente
ON cliente
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    IF EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Actualizacion en cliente.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM inserted)
    BEGIN
        RAISERROR('Insercion en cliente.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Eliminacion en cliente.', 0, 1) WITH NOWAIT;
        RETURN;
    END
END;
GO

CREATE TRIGGER tr_usuario
ON usuario
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    IF EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Actualizacion en usuario.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM inserted)
    BEGIN
        RAISERROR('Insercion en usuario.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Eliminacion en usuario.', 0, 1) WITH NOWAIT;
        RETURN;
    END
END;
GO

CREATE TRIGGER tr_rol
ON rol
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    IF EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Actualizacion en rol.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM inserted)
    BEGIN
        RAISERROR('Insercion en rol.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Eliminacion en rol.', 0, 1) WITH NOWAIT;
        RETURN;
    END
END;
GO

CREATE TRIGGER tr_tiene
ON tiene
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    IF EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Actualizacion en tiene.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM inserted)
    BEGIN
        RAISERROR('Insercion en tiene.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Eliminacion en tiene.', 0, 1) WITH NOWAIT;
        RETURN;
    END
END;
GO

CREATE TRIGGER tr_encabezado_factura
ON encabezado_factura
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    IF EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Actualizacion en encabezado_factura.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM inserted)
    BEGIN
        RAISERROR('Insercion en encabezado_factura.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Eliminacion en encabezado_factura.', 0, 1) WITH NOWAIT;
        RETURN;
    END
END;
GO

CREATE TRIGGER tr_detalle_factura
ON detalle_factura
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    IF EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Actualizacion en detalle_factura.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM inserted)
    BEGIN
        RAISERROR('Insercion en detalle_factura.', 0, 1) WITH NOWAIT;
        RETURN;
    END

    IF EXISTS (SELECT * FROM deleted)
    BEGIN
        RAISERROR('Eliminacion en detalle_factura.', 0, 1) WITH NOWAIT;
        RETURN;
    END
END;
GO

--------------------------------------------------------------------------------------------------------------------------------------
--FUNCIONES
--PERSONA
CREATE PROCEDURE obtener_persona
AS
BEGIN
	SELECT * FROM persona;
END
GO

CREATE PROCEDURE buscar_persona
@id INT
AS
BEGIN
	SELECT * FROM persona WHERE id = @id;
END
GO

CREATE PROCEDURE crear_persona
@cedula VARCHAR(30), @nombre VARCHAR(30), @segundo_nombre VARCHAR(30), @apellido VARCHAR(30), @segundo_apellido VARCHAR(30), @edad INT
AS
BEGIN
	INSERT INTO persona
    (cedula, nombre, segundo_nombre, apellido, segundo_apellido, edad)
    VALUES (@cedula, @nombre, @segundo_nombre, @apellido, @segundo_apellido, @edad);
END
GO

CREATE PROCEDURE actualizar_persona
@id INT, @cedula VARCHAR(30), @nombre VARCHAR(30), @segundo_nombre VARCHAR(30), @apellido VARCHAR(30), @segundo_apellido VARCHAR(30), @edad INT
AS
BEGIN
	UPDATE persona
    SET cedula = @cedula, nombre = @nombre, segundo_nombre = @segundo_nombre, apellido = @apellido, segundo_apellido = @segundo_apellido, edad = @edad
    WHERE id= @id;
END
GO

CREATE PROCEDURE eliminar_persona
@id INT
AS
BEGIN
	DELETE FROM persona
    WHERE id= @id;
END
GO

--SUCURSAL
CREATE PROCEDURE obtener_sucursal
AS
BEGIN
	SELECT * FROM sucursal;
END
GO

CREATE PROCEDURE buscar_sucursal
@id INT
AS
BEGIN
	SELECT * FROM sucursal WHERE id = @id;
END
GO

CREATE PROCEDURE crear_sucursal
@telefono VARCHAR(30), @direccion VARCHAR(50)
AS
BEGIN
	INSERT INTO sucursal
    (telefono, direccion)
    VALUES (@telefono, @direccion);
END
GO

CREATE PROCEDURE actualizar_sucursal
@id INT, @telefono VARCHAR(30), @direccion VARCHAR(50)
AS
BEGIN
	UPDATE sucursal
    SET telefono = @telefono, direccion = @direccion
    WHERE id= @id;
END
GO

CREATE PROCEDURE eliminar_sucursal
@id INT
AS
BEGIN
	DELETE FROM sucursal
    WHERE id= @id;
END
GO

--PRODUCTO
CREATE PROCEDURE obtener_producto
AS
BEGIN
	SELECT * FROM producto;
END
GO

CREATE PROCEDURE buscar_producto
@id INT
AS
BEGIN
	SELECT * FROM producto WHERE id = @id;
END
GO

CREATE PROCEDURE crear_producto
@nombre VARCHAR(30), @modelo VARCHAR(30), @marca VARCHAR(30), @inversion INT, @venta INT, @descuento INT, @unidad INT
AS
BEGIN
	INSERT INTO producto
    (nombre, modelo, marca, inversion, venta, descuento, unidad)
    VALUES (@nombre, @modelo, @marca, @inversion, @venta, @descuento, @unidad);
END
GO

CREATE PROCEDURE actualizar_producto
@id INT, @nombre VARCHAR(30), @modelo VARCHAR(30), @marca VARCHAR(30), @inversion INT, @venta INT, @descuento INT, @unidad INT
AS
BEGIN
	UPDATE producto
    SET nombre = @nombre, modelo = @modelo, marca = @marca, inversion = @inversion, venta = @venta, descuento = @descuento, unidad = @unidad
    WHERE id= @id;
END
GO

CREATE PROCEDURE eliminar_producto
@id INT
AS
BEGIN
	DELETE FROM producto
    WHERE id= @id;
END
GO

--EMPLEADO
CREATE PROCEDURE obtener_empleado
AS
BEGIN
	SELECT * FROM empleado;
END
GO

CREATE PROCEDURE buscar_empleado
@id INT
AS
BEGIN
	SELECT * FROM empleado WHERE id = @id;
END
GO

CREATE PROCEDURE crear_empleado
@id_persona INT, @id_sucursal INT, @sueldo INT
AS
BEGIN
	INSERT INTO empleado
    (id_persona, id_sucursal, sueldo)
    VALUES (@id_persona, @id_sucursal, @sueldo);
END
GO

CREATE PROCEDURE actualizar_empleado
@id INT, @id_persona INT, @id_sucursal INT, @sueldo INT
AS
BEGIN
	UPDATE empleado
    SET id_persona = @id_persona, id_sucursal = @id_sucursal, sueldo = @sueldo
    WHERE id= @id;
END
GO

CREATE PROCEDURE eliminar_empleado
@id INT
AS
BEGIN
	DELETE FROM empleado
    WHERE id= @id;
END
GO

--CLIENTE
CREATE PROCEDURE obtener_cliente
AS
BEGIN
	SELECT * FROM cliente;
END
GO

CREATE PROCEDURE buscar_cliente
@id INT
AS
BEGIN
	SELECT * FROM cliente WHERE id = @id;
END
GO

CREATE PROCEDURE crear_cliente
@id_persona INT, @fecha_ingreso DATETIME
AS
BEGIN
	INSERT INTO cliente
    (id_persona, fecha_ingreso)
    VALUES (@id_persona, @fecha_ingreso);
END
GO

CREATE PROCEDURE actualizar_cliente
@id INT, @id_persona INT, @fecha_ingreso DATETIME
AS
BEGIN
	UPDATE cliente
    SET id_persona = @id_persona, fecha_ingreso = @fecha_ingreso
    WHERE id= @id;
END
GO

CREATE PROCEDURE eliminar_cliente
@id INT
AS
BEGIN
	DELETE FROM cliente
    WHERE id= @id;
END
GO

--USUARIO
CREATE PROCEDURE obtener_usuario
AS
BEGIN
	SELECT * FROM usuario;
END
GO

CREATE PROCEDURE buscar_usuario
@id INT
AS
BEGIN
	SELECT * FROM usuario WHERE id = @id;
END
GO

CREATE PROCEDURE crear_usuario
@id_empleado INT, @correo VARCHAR(30), @clave VARCHAR(30)
AS
BEGIN
	INSERT INTO usuario
    (id_empleado, correo, clave)
    VALUES (@id_empleado, @correo, @clave);
END
GO

CREATE PROCEDURE actualizar_usuario
@id INT, @id_empleado INT, @correo VARCHAR(30), @clave VARCHAR(30)
AS
BEGIN
	UPDATE usuario
    SET id_empleado = @id_empleado, correo = @correo, clave = @clave
    WHERE id= @id;
END
GO

CREATE PROCEDURE eliminar_usuario
@id INT
AS
BEGIN
	DELETE FROM usuario
    WHERE id= @id;
END
GO

--ROL
CREATE PROCEDURE obtener_rol
AS
BEGIN
	SELECT * FROM rol;
END
GO

CREATE PROCEDURE buscar_rol
@id INT
AS
BEGIN
	SELECT * FROM rol WHERE id = @id;
END
GO

CREATE PROCEDURE crear_rol
@descripcion VARCHAR(50)
AS
BEGIN
	INSERT INTO rol
    (descripcion)
    VALUES (@descripcion);
END
GO

CREATE PROCEDURE actualizar_rol
@id INT, @descripcion VARCHAR(50)
AS
BEGIN
	UPDATE rol
    SET descripcion = @descripcion
    WHERE id= @id;
END
GO

CREATE PROCEDURE eliminar_rol
@id INT
AS
BEGIN
	DELETE FROM rol
    WHERE id= @id;
END
GO

--TIENE
CREATE PROCEDURE obtener_tiene
AS
BEGIN
	SELECT * FROM tiene;
END
GO

CREATE PROCEDURE buscar_tiene
@id_usuario INT, @id_rol INT
AS
BEGIN
	SELECT * FROM tiene WHERE id_usuario= @id_usuario AND id_rol= @id_rol;
END
GO

CREATE PROCEDURE crear_tiene
@id_usuario INT, @id_rol INT
AS
BEGIN
	INSERT INTO tiene
    (id_usuario, id_rol)
    VALUES (@id_usuario, @id_rol);
END
GO

CREATE PROCEDURE actualizar_tiene
@id_usuario INT, @id_rol INT
AS
BEGIN
	UPDATE tiene
    SET id_usuario = @id_usuario, id_rol = @id_rol
    WHERE id_usuario= @id_usuario AND id_rol= @id_rol;
END
GO

CREATE PROCEDURE eliminar_tiene
@id_usuario INT, @id_rol INT
AS
BEGIN
	DELETE FROM tiene
    WHERE id_usuario= @id_usuario AND id_rol= @id_rol;
END
GO

--ENCABEZADO_FACTURA
CREATE PROCEDURE obtener_encabezado_factura
AS
BEGIN
	SELECT * FROM encabezado_factura;
END
GO

CREATE PROCEDURE buscar_encabezado_factura
@id INT
AS
BEGIN
	SELECT * FROM encabezado_factura WHERE id = @id;
END
GO

CREATE PROCEDURE crear_encabezado_factura
@id_usuario INT, @fecha DATETIME
AS
BEGIN
	INSERT INTO encabezado_factura
    (id_usuario, fecha)
    VALUES (@id_usuario, @fecha);
END
GO

CREATE PROCEDURE actualizar_encabezado_factura
@id INT, @id_usuario INT, @fecha DATETIME
AS
BEGIN
	UPDATE encabezado_factura
    SET id_usuario = @id_usuario, fecha = @fecha
    WHERE id= @id;
END
GO

CREATE PROCEDURE eliminar_encabezado_factura
@id INT
AS
BEGIN
	DELETE FROM encabezado_factura
    WHERE id= @id;
END
GO

--DETALLE_FACTURA
CREATE PROCEDURE obtener_detalle_factura
AS
BEGIN
	SELECT * FROM detalle_factura;
END
GO

CREATE PROCEDURE buscar_detalle_factura
@id INT
AS
BEGIN
	SELECT * FROM detalle_factura WHERE id = @id;
END
GO

CREATE PROCEDURE crear_detalle_factura
@id_encabezado_factura INT, @id_cliente INT, @id_producto INT, @subtotal INT, @total INT, @impuesto INT, @cantidad INT
AS
BEGIN
	INSERT INTO detalle_factura
    (id_encabezado_factura, id_cliente, id_producto, subtotal, total, impuesto, cantidad)
    VALUES (@id_encabezado_factura, @id_cliente, @id_producto, @subtotal, @total, @impuesto, @cantidad);
END
GO

CREATE PROCEDURE actualizar_detalle_factura
@id INT, @id_encabezado_factura INT, @id_cliente INT, @id_producto INT, @subtotal INT, @total INT, @impuesto INT, @cantidad INT
AS
BEGIN
	UPDATE detalle_factura
    SET id_encabezado_factura = @id_encabezado_factura, id_cliente = @id_cliente, id_producto = @id_producto, subtotal = @subtotal, total = @total, 
    impuesto = @impuesto, cantidad = @cantidad
    WHERE id= @id;
END
GO

CREATE PROCEDURE eliminar_detalle_factura
@id INT
AS
BEGIN
	DELETE FROM detalle_factura
    WHERE id= @id;
END
GO


--OTRAS FUNCIONES ADICIONALES
CREATE PROCEDURE iniciar_sesion
@correo VARCHAR(60), @clave VARCHAR(30), @informacion INT OUTPUT
AS
BEGIN
    DECLARE @temp_rol INT;

    BEGIN TRANSACTION;

    SELECT @temp_rol = T.id_rol
    FROM tiene AS T
    INNER JOIN usuario AS U ON T.id_usuario = U.id
    WHERE UPPER(U.correo) = @correo AND UPPER(U.clave) = @clave;

    IF @temp_rol IS NOT NULL
    BEGIN
        SET @informacion = @temp_rol;
        PRINT @informacion;
    END
    ELSE
    BEGIN
        SET @informacion = -1;
        PRINT @informacion;
    END

    COMMIT TRANSACTION;

END
GO

CREATE PROCEDURE obtener_factura
AS
BEGIN
    SELECT DF.id, DF.id_encabezado_factura, EF.id_usuario, EF.fecha, DF.id_cliente,
    DF.id_producto, DF.subtotal, DF.total, DF.impuesto, DF.cantidad
    FROM detalle_factura AS DF
    INNER JOIN encabezado_factura AS EF ON DF.id_encabezado_factura = EF.id;
END
GO

CREATE PROCEDURE crear_factura
@id_usuario INT, @fecha VARCHAR(20), @id_cliente INT, @id_producto INT, @cantidad INT, @informacion INT OUTPUT
AS
BEGIN
    BEGIN TRANSACTION;

	DECLARE @fecha_ingresada DATETIME;

	BEGIN TRY
		SET @fecha_ingresada = CONVERT(DATETIME, @fecha, 120);
	END TRY

	BEGIN CATCH
	END CATCH

	IF @cantidad > 0
    BEGIN
		IF ISDATE(@fecha_ingresada) = 1
		BEGIN
			DECLARE @temp_id_usuario_buscado INT;

			SELECT @temp_id_usuario_buscado = id
			FROM usuario
			WHERE id= @id_usuario

			IF @temp_id_usuario_buscado IS NOT NULL
			BEGIN
				DECLARE @temp_id_cliente_buscado INT;

				SELECT @temp_id_cliente_buscado = id
				FROM cliente
				WHERE id= @id_cliente

				IF @temp_id_cliente_buscado IS NOT NULL
				BEGIN
					DECLARE @temp_id_producto_buscado INT;

					SELECT @temp_id_producto_buscado = id
					FROM producto
					WHERE id= @id_producto

					IF @temp_id_producto_buscado IS NOT NULL
					BEGIN
						DECLARE @temp_producto_cantidad INT;

						SELECT @temp_producto_cantidad = unidad
						FROM producto
						WHERE id= @id_producto

						IF @cantidad <= @temp_producto_cantidad
						BEGIN
							DECLARE @temp_producto_cantidad_actual INT;

							SELECT @temp_producto_cantidad_actual = unidad
							FROM producto
							WHERE id= @id_producto

							DECLARE @temp_nueva_cantidad_producto INT;

							SET @temp_nueva_cantidad_producto= @temp_producto_cantidad_actual - @cantidad;

							DECLARE @temp_producto_venta INT;

							SELECT @temp_producto_venta = venta
							FROM producto
							WHERE id= @id_producto

							DECLARE @temp_producto_venta_factura INT;

							SET @temp_producto_venta_factura= @temp_producto_venta * @cantidad;

							DECLARE @temp_producto_descuento INT;

							SELECT @temp_producto_descuento = descuento
							FROM producto
							WHERE id= @id_producto

							DECLARE @temp_producto_descuento_porcentaje DECIMAL(18, 2);

							SET @temp_producto_descuento_porcentaje = CAST(@temp_producto_descuento AS DECIMAL(18, 2)) / 100.0;

							DECLARE @temp_producto_precio_descuento INT;

							SET @temp_producto_precio_descuento= @temp_producto_venta_factura * @temp_producto_descuento_porcentaje;

							DECLARE @temp_producto_precio_con_descuento INT;
							SET @temp_producto_precio_con_descuento= @temp_producto_venta_factura - @temp_producto_precio_descuento;

							DECLARE @temp_producto_impuesto_factura INT;

							SET @temp_producto_impuesto_factura= @temp_producto_precio_con_descuento * 0.13;

							DECLARE @temp_precio_final_factura INT;

							SET @temp_precio_final_factura= @temp_producto_precio_con_descuento + @temp_producto_impuesto_factura;

							BEGIN TRY
								UPDATE producto
								SET unidad = @temp_nueva_cantidad_producto
								WHERE id= @id_producto;
							END TRY
							BEGIN CATCH
								SET @informacion = 6;
								PRINT @informacion;
								ROLLBACK TRANSACTION;
							END CATCH

							DECLARE @TempEncabezadoFactura TABLE (id INT);

							BEGIN TRY
								INSERT INTO encabezado_factura
								(id_usuario, fecha)
								OUTPUT INSERTED.id INTO @TempEncabezadoFactura
								VALUES (@id_usuario, @fecha);
							END TRY
							BEGIN CATCH
								SET @informacion = 7;
								PRINT @informacion;
								ROLLBACK TRANSACTION;
							END CATCH

							BEGIN TRY
								INSERT INTO detalle_factura
								(id_encabezado_factura, id_cliente, id_producto, subtotal, total, impuesto, cantidad)
								VALUES ((SELECT id FROM @TempEncabezadoFactura), @id_cliente, @id_producto, 
								@temp_producto_precio_con_descuento, @temp_precio_final_factura, @temp_producto_impuesto_factura, @cantidad);

								SET @informacion = 0;
								PRINT @informacion;
							END TRY
							BEGIN CATCH
								SET @informacion = 8;
								PRINT @informacion;
								ROLLBACK TRANSACTION;
							END CATCH

						END
						ELSE
						BEGIN
							SET @informacion = 5;
							PRINT @informacion;
						END

					END
					ELSE
					BEGIN
						SET @informacion = 4;
						PRINT @informacion;
					END

				END
				ELSE
				BEGIN
					SET @informacion = 3;
					PRINT @informacion;
				END

			END
			ELSE
			BEGIN
				SET @informacion = 2;
				PRINT @informacion;
			END
		END
		ELSE
		BEGIN
			SET @informacion = 1;
			PRINT @informacion;
		END
	END
	ELSE
	BEGIN
		SET @informacion = 9;
		PRINT @informacion;
	END
    COMMIT TRANSACTION;

END
GO

CREATE PROCEDURE buscar_factura
@id INT
AS
BEGIN
    SELECT DF.id, DF.id_encabezado_factura, EF.id_usuario, EF.fecha, DF.id_cliente,
    DF.id_producto, DF.subtotal, DF.total, DF.impuesto, DF.cantidad
    FROM detalle_factura AS DF
    INNER JOIN encabezado_factura AS EF ON DF.id_encabezado_factura = EF.id
    WHERE DF.id = @id;
END
GO

CREATE PROCEDURE eliminar_factura
@id INT, @informacion INT OUTPUT
AS
BEGIN
    BEGIN TRANSACTION;

    DECLARE @temp_id_factura_buscado INT;

    SELECT @temp_id_factura_buscado = id
    FROM detalle_factura
    WHERE id= @id

    IF @temp_id_factura_buscado IS NOT NULL
    BEGIN
        DECLARE @temp_id_encabezado_factura INT;

        SELECT @temp_id_encabezado_factura = id_encabezado_factura
        FROM detalle_factura
        WHERE id= @id

        BEGIN TRY
            DELETE FROM detalle_factura
            WHERE id= @id;
        END TRY
        BEGIN CATCH
            SET @informacion = 2;
            PRINT @informacion;
            ROLLBACK TRANSACTION;
        END CATCH

        BEGIN TRY
            DELETE FROM encabezado_factura
            WHERE id= @temp_id_encabezado_factura;

            SET @informacion = 0;
            PRINT @informacion;
        END TRY
        BEGIN CATCH
            SET @informacion = 3;
            PRINT @informacion;
            ROLLBACK TRANSACTION;
        END CATCH
    END
    ELSE
    BEGIN
        SET @informacion = 1;
        PRINT @informacion;
    END

    COMMIT TRANSACTION;
END
GO

CREATE PROCEDURE actualizar_factura
@id INT, @id_encabezado_factura INT, @id_usuario INT, @fecha VARCHAR(20), @id_cliente INT, @id_producto INT, 
@subtotal INT, @total INT, @impuesto INT, @cantidad INT, @informacion INT OUTPUT
AS
BEGIN
    BEGIN TRANSACTION;

    DECLARE @temp_id_factura_buscado INT;

    DECLARE @temp_id_encabezado_factura_actual INT;

    SELECT @temp_id_factura_buscado = id, @temp_id_encabezado_factura_actual = id_encabezado_factura
    FROM detalle_factura
    WHERE id= @id

    IF @temp_id_factura_buscado IS NOT NULL
    BEGIN

        DECLARE @temp_id_encabezado_factura INT;

        SELECT @temp_id_encabezado_factura = id
        FROM encabezado_factura
        WHERE id= @id_encabezado_factura

        IF @temp_id_encabezado_factura IS NOT NULL
        BEGIN
		    DECLARE @temp_id_encabezado_factura_buscado INT;

            SELECT @temp_id_encabezado_factura_buscado = id_encabezado_factura
            FROM detalle_factura
            WHERE id_encabezado_factura= @id_encabezado_factura

            IF @temp_id_encabezado_factura_buscado IS NULL OR @id_encabezado_factura = @temp_id_encabezado_factura_actual
			BEGIN
				DECLARE @temp_id_usuario_buscado INT;

				SELECT @temp_id_usuario_buscado = id
				FROM usuario
				WHERE id= @id_usuario

				IF @temp_id_usuario_buscado IS NOT NULL
				BEGIN

				DECLARE @fecha_ingresada DATETIME;

				BEGIN TRY
					SET @fecha_ingresada = CONVERT(DATETIME, @fecha, 120);
				END TRY

				BEGIN CATCH
				END CATCH

				IF ISDATE(@fecha_ingresada) = 1
				BEGIN

					DECLARE @temp_id_cliente_buscado INT;

					SELECT @temp_id_cliente_buscado = id
					FROM cliente
					WHERE id= @id_cliente

					IF @temp_id_cliente_buscado IS NOT NULL
					BEGIN
						DECLARE @temp_id_producto_buscado INT;

						SELECT @temp_id_producto_buscado = id
						FROM producto
						WHERE id= @id_producto

						IF @temp_id_producto_buscado IS NOT NULL
						BEGIN
							BEGIN TRY
								UPDATE encabezado_factura
								SET id_usuario = @id_usuario, fecha = @fecha
								WHERE id= @id_encabezado_factura
							END TRY
							BEGIN CATCH
								SET @informacion = 7;
								PRINT @informacion;
								ROLLBACK TRANSACTION;
							END CATCH

							BEGIN TRY
								UPDATE detalle_factura
								SET id_encabezado_factura = @id_encabezado_factura, id_cliente = @id_cliente, id_producto = @id_producto, subtotal = @subtotal, total = @total, 
								impuesto = @impuesto, cantidad = @cantidad
								WHERE id= @id

								SET @informacion = 0;
								PRINT @informacion;
							END TRY
							BEGIN CATCH
								SET @informacion = 8;
								PRINT @informacion;
								ROLLBACK TRANSACTION;
							END CATCH

						END
						ELSE
						BEGIN
							SET @informacion = 6;
							PRINT @informacion;
						END

					END
					ELSE
					BEGIN
						SET @informacion = 5;
						PRINT @informacion;
					END
        
				END
				ELSE
				BEGIN
					SET @informacion = 4;
					PRINT @informacion;
				END

				END
				ELSE
				BEGIN
					SET @informacion = 3;
					PRINT @informacion;
				END

			END
			ELSE
			BEGIN
			    SET @informacion = 9;
				PRINT @informacion;
			END

        END
        ELSE
        BEGIN
            SET @informacion = 2;
            PRINT @informacion;
        END
    END
    ELSE
    BEGIN
        SET @informacion = 1;
        PRINT @informacion;
    END
    COMMIT TRANSACTION;

END
GO