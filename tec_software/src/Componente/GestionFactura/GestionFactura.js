import React, { useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { FilterLeft, BoxArrowRight } from 'react-bootstrap-icons';
import "./GestionFactura.css";
import Sidebar from '../SideBar/SideBar';
import axios from 'axios';
import InputMask from 'react-input-mask';

function GestionFactura() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [contentShifted, setContentShifted] = useState(false);
  const [facturas, setFacturas] = useState([]);

  const [id, setId] = useState('');
  const [id_en_fac, setIdEnFac] = useState('');
  const [id_usuario, setIdUsuario] = useState('');
  const [fecha, setFecha] = useState('');
  const [id_cliente, setIdCliente] = useState('');
  const [id_producto, setIdProducto] = useState('');
  const [subtotal, setSubtotal] = useState('');
  const [total, setTotal] = useState('');
  const [impuesto, setImpuesto] = useState('');
  const [cantidad, setCantidad] = useState('');

  const [showError, setShowError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const [showAllInputsEliminar, setShowAllInputsEliminar] = useState(true);
  const [showAllInputsBuscar, setShowAllInputsBuscar] = useState(true);
  const [showAllInputsAgregar, setShowAllInputsAgregar] = useState(true);
  const [showAllInputsEditar, setShowAllInputsEditar] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSalirHome  = () => {
  };

  const [selectedOption, setSelectedOption] = useState('agregar');

  const handleRadioChange = (event) => {
    setShowError(false);
    setSelectedOption(event.target.value);
    
    setShowAllInputsEliminar(event.target.value === 'eliminar');
    setShowAllInputsBuscar(event.target.value === 'buscar');
    setShowAllInputsAgregar(event.target.value === 'agregar');
    setShowAllInputsEditar(event.target.value === 'editar');
  };


  useEffect(() => {
    const contentElement = document.querySelector('.content');
    if (contentElement) {
      if (isSidebarOpen) {
        contentElement.style.transition = 'margin-left 0.3s';
        contentElement.style.marginLeft = '250px';
        setContentShifted(true);
      } else {
        contentElement.style.transition = 'margin-left 0.3s';
        contentElement.style.marginLeft = '0';
        setContentShifted(false);
      }
    }

    handleRadioChange({ target: { value: selectedOption } });

    fetchFacturas();
  }, [isSidebarOpen]);

  const fetchFacturas = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/factura');
      setFacturas(response.data);
    } catch (error) {
      console.error('Error fetching facturas:', error);
    }
  };

  const handleLimpiar = () => {
    setId('');
    setIdEnFac('');
    setIdUsuario('');
    setFecha('');
    setIdCliente('');
    setIdProducto('');
    setSubtotal('');
    setTotal('');
    setImpuesto('');
    setCantidad('');
    setShowError(false);
  };

  const handleAgregar = async (e) => {
    e.preventDefault();

    if (id_usuario.trim() === '' || fecha.trim() === '' ||
    id_cliente.trim() === '' || id_producto.trim() === ''  ||
    cantidad.trim() === '' || fecha.includes('_')) {
      setShowError(true);
      setErrorText('No pueden haber campos vacios.');
      return;
    }

    const orderedData = {
      id_usuario: id_usuario,
      fecha: fecha,
      id_cliente: id_cliente,
      id_producto: id_producto,
      cantidad: cantidad,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/facturas', orderedData);

      if(response.data===0){
        setShowError(true);
        setErrorText('Factura creada.');
        fetchFacturas();
      }
      if(response.data===1){
        setShowError(true);
        setErrorText('Fecha incorrecta.');
      }
      if(response.data===2){
        setShowError(true);
        setErrorText('Usuario no encontrado.');
      }
      if(response.data===3){
        setShowError(true);
        setErrorText('Cliente no encontrado.');
      }
      if(response.data===4){
        setShowError(true);
        setErrorText('Producto no encontrado.');
      }
      if(response.data===5){
        setShowError(true);
        setErrorText('Cantidad del producto solicitado menor a la disponible.');
      }
      if(response.data===6){
        setShowError(true);
        setErrorText('Error en actualizacion de producto.');
      }
      if(response.data===7){
        setShowError(true);
        setErrorText('Error en insercion de encabezado_factura.');
      }
      if(response.data===8){
        setShowError(true);
        setErrorText('Error en insercion de detalle_factura.');
      }
      if(response.data===9){
        setShowError(true);
        setErrorText('Cantidad del producto debe ser mayor a cero.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditar = async (e) => {
    e.preventDefault();

    if (id.trim() === '' || id_en_fac.trim() === '' ||
    id_usuario.trim() === '' || fecha.trim() === ''  ||
    id_cliente.trim() === '' ||  id_producto.trim() === '' ||
    subtotal.trim() === '' || total.trim() === '' ||
    impuesto.trim() === '' || cantidad.trim() === '' || fecha.includes('_')) {
      setShowError(true);
      setErrorText('No pueden haber campos vacios.');
      return;
    }

    const orderedData = {
      id_encabezado_factura: id_en_fac,
      id_usuario: id_usuario,
      fecha: fecha,
      id_cliente: id_cliente,
      id_producto: id_producto,
      subtotal: subtotal,
      total: total,
      impuesto: impuesto,
      cantidad: cantidad,
    };

    try {
      const response = await axios.put(`${'http://localhost:3000/api/facturas'}/${id}`, orderedData);

      if(response.data===0){
        setShowError(true);
        setErrorText('Factura editada.');
        fetchFacturas();
      }
      if(response.data===1){
        setShowError(true);
        setErrorText('Factura no encontrada.');
      }
      if(response.data===2){
        setShowError(true);
        setErrorText('Encabezado de factura no encontrado.');
      }
      if(response.data===3){
        setShowError(true);
        setErrorText('Usuario no encontrado.');
      }
      if(response.data===4){
        setShowError(true);
        setErrorText('Fecha incorrecta.');
      }
      if(response.data===5){
        setShowError(true);
        setErrorText('Cliente no encontrado.');
      }
      if(response.data===6){
        setShowError(true);
        setErrorText('Producto no encontrado.');
      }
      if(response.data===7){
        setShowError(true);
        setErrorText('Error en actualizacion de encabezado_factura.');
      }
      if(response.data===8){
        setShowError(true);
        setErrorText('Error en actualizacion de detalle_factura.');
      }
      if(response.data===9){
        setShowError(true);
        setErrorText('Encabezado de factura ya utilizado.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuscar = async (e) => {
    e.preventDefault();

    if (id.trim() === '') {
      setShowError(true);
      setErrorText('No pueden haber campos vacios.');
      return;
    }

    try {
      const response = await axios.get(`${'http://localhost:3000/api/factura'}/${id}`);
      setFacturas(response.data);
      setErrorText('Factura buscada.');
    } catch (error) {
      console.error('Error fetching facturas:', error);
    }
  };

  const handleEliminar = async (e) => {
    e.preventDefault();

    if (id.trim() === '') {
      setShowError(true);
      setErrorText('No pueden haber campos vacios.');
      return;
    }

    try {
      const response = await axios.delete(`${'http://localhost:3000/api/facturas'}/${id}`);

      if(response.data===0){
        setShowError(true);
        setErrorText('Factura eliminada.');
        fetchFacturas();
      }
      if(response.data===1){
        setShowError(true);
        setErrorText('Factura no encontrada');
      }
      if(response.data===2){
        setShowError(true);
        setErrorText('Error en eliminacion de detalle_factura.');
      }
      if(response.data===3){
        setShowError(true);
        setErrorText('Error en eliminacion de encabezado_factura.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form className={`gestion-factura ${isSidebarOpen ? 'content-shifted-gestion-factura' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Form className={`inferior-gestion-factura ${isSidebarOpen ? 'inferior-gestion-factura-shifted' : ''}`}>
        <h1>Copyright © 2023 TECSoftware</h1>
      </Form>

      <Form.Group className="rectangulo-gestion-factura">

      {(showAllInputsEditar || showAllInputsEliminar || showAllInputsBuscar) && (
                <>
      <Form.Group className="id-texto-gestion-factura">
        ID
      </Form.Group>
      </>
      )}

      <Form.Group className="error-gestion-factura">
        {showError && <p>{errorText}</p>}
      </Form.Group>

      {(showAllInputsEditar || showAllInputsEliminar || showAllInputsBuscar) && (
                <> 
      <Form.Group className="id-detalle-factura-gestion-factura">
        <Form.Control
          onChange={(e) => {
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
               setId(e.target.value)
            }
          }}
          value={id}
          className="entrada-id-gestion-factura"
        />
      </Form.Group>
      </>
      )}

      {(showAllInputsEditar) && (
                <>
      <Form.Group className="id-encabezado-factura-texto-gestion-factura">
        ID_en_fac
      </Form.Group>
      </>
      )}

      {(showAllInputsEditar)  && (
                <>
      <Form.Group className="id-encabezado-factura-gestion-factura">
        <Form.Control
          onChange={(e) => {
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
               setIdEnFac(e.target.value)
            }
          }}
          value={id_en_fac}
          className="entrada-id-gestion-factura"
        />
      </Form.Group>
      </>
      )}

      {(showAllInputsAgregar || showAllInputsEditar)  && (
                <>
      <Form.Group className="id-usuario-texto-gestion-factura">
        ID_usuario
      </Form.Group>
      </>
      )}

      {(showAllInputsAgregar || showAllInputsEditar)  && (
                <>
      <Form.Group className="id-usuario-gestion-factura">
        <Form.Control
          onChange={(e) => {
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
               setIdUsuario(e.target.value)
            }
          }}
          value={id_usuario}
          className="entrada-id-gestion-factura"
        />
      </Form.Group>
      </>
      )}

      {(showAllInputsAgregar || showAllInputsEditar)  && (
                <>
      <Form.Group className="fecha-texto-gestion-factura">
        Fecha
      </Form.Group>
      </>
      )}

      {(showAllInputsAgregar || showAllInputsEditar)  && (
                <> 
      <Form.Group className="fecha-gestion-factura">
      <InputMask
          mask="9999-99-99 99:99:99"
          maskChar="_"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="entrada-fecha-gestion-factura"
        />
      </Form.Group>
      </>
      )}

      {(showAllInputsAgregar || showAllInputsEditar)  && (
                <>       
      <Form.Group className="id-cliente-texto-gestion-factura">
        ID_cliente
      </Form.Group>
      </>
      )}

      {(showAllInputsAgregar || showAllInputsEditar) && (
                <>         
      <Form.Group className="id-cliente-gestion-factura">
        <Form.Control
          onChange={(e) => {
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
               setIdCliente(e.target.value)
            }
          }}
          value={id_cliente}
          className="entrada-id-gestion-factura"
        />
      </Form.Group>
      </>
      )}

      {(showAllInputsAgregar || showAllInputsEditar)  && (
                <>       
      <Form.Group className="id-producto-texto-gestion-factura">
        ID_producto
      </Form.Group>
      </>
      )}

      {(showAllInputsAgregar || showAllInputsEditar)  && (
                <>           
      <Form.Group className="id-producto-gestion-factura">
        <Form.Control
          onChange={(e) => {
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
               setIdProducto(e.target.value)
            }
          }}
          value={id_producto}
          className="entrada-id-gestion-factura"
        />
      </Form.Group>
      </>
      )}

      {(showAllInputsEditar)  && (
                <>   
      <Form.Group className="subtotal-texto-gestion-factura">
        Subtotal
      </Form.Group>
      </>
      )}

      {(showAllInputsEditar)  && (
                <>         
      <Form.Group className="subtotal-gestion-factura">
        <Form.Control
          onChange={(e) => {
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
               setSubtotal(e.target.value)
            }
          }}
          value={subtotal}
          className="entrada-numero-gestion-factura"
        />
      </Form.Group>
      </>
      )}

      {(showAllInputsEditar)  && (
                <>     
      <Form.Group className="total-texto-gestion-factura">
        Total
      </Form.Group>
      </>
      )}

      {(showAllInputsEditar)  && (
                <>     
      <Form.Group className="total-gestion-factura">
        <Form.Control
          onChange={(e) => {
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
               setTotal(e.target.value)
            }
          }}
          value={total}
          className="entrada-numero-gestion-factura"
        />
      </Form.Group>
      </>
      )}

      {(showAllInputsEditar)  && (
                <>         
      <Form.Group className="impuesto-texto-gestion-factura">
        Impuesto
      </Form.Group>
      </>
      )}

      {(showAllInputsEditar)  && (
                <>    
      <Form.Group className="impuesto-gestion-factura">
        <Form.Control
          onChange={(e) => {
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
               setImpuesto(e.target.value)
            }
          }}
          value={impuesto}
          className="entrada-numero-gestion-factura"
        />
      </Form.Group>
      </>
      )}


      {(showAllInputsAgregar || showAllInputsEditar)  && (
                <>   
      <Form.Group className="cantidad-texto-gestion-factura">
        Cantidad
      </Form.Group>
      </>
      )}

      {(showAllInputsAgregar || showAllInputsEditar)  && (
                <>   
      <Form.Group className="cantidad-gestion-factura">
        <Form.Control
          onChange={(e) => {
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
               setCantidad(e.target.value)
            }
          }}
          value={cantidad}
          className="entrada-numero-gestion-factura"
        />
      </Form.Group>
      </>
      )}

      <Button variant="boton-actualizar-gestion-factura"  className="boton-actualizar-gestion-factura" onClick={fetchFacturas}>
        Actualizar
      </Button>

      <Button variant="boton-limpiar-gestion-factura"  className="boton-limpiar-gestion-factura" onClick={handleLimpiar}>
        Limpiar
      </Button>
      
      <Form.Group className="botones-gestion-factura">
          <Button variant="boton-agregar-gestion-factura"  className="boton-agregar-gestion-factura" disabled={!showAllInputsAgregar} onClick={handleAgregar}>
            Agregar
          </Button>
          <Button variant="boton-editar-gestion-factura"  className="boton-editar-gestion-factura" disabled={!showAllInputsEditar} onClick={handleEditar}>
            Editar
          </Button>
          <Button variant="boton-eliminar-gestion-factura"  className="boton-eliminar-gestion-factura" disabled={!showAllInputsEliminar} onClick={handleEliminar}>
            Eliminar
          </Button>
          <Button variant="boton-buscar-gestion-factura"  className="boton-buscar-gestion-factura" disabled={!showAllInputsBuscar} onClick={handleBuscar}>
            Buscar
          </Button>
      </Form.Group>

      <Form.Group className="radios-gestion-factura">
        <Form.Check
          type="radio"
          name="radio-option"
          value="agregar"
          checked={selectedOption === 'agregar'}
          onChange={handleRadioChange}
          className="radio-gestion-factura"
        />
        <Form.Check
          type="radio"
          name="radio-option"
          value="editar"
          checked={selectedOption === 'editar'}
          onChange={handleRadioChange}
          className="radio-gestion-factura"
        />
        <Form.Check
          type="radio"
          name="radio-option"
          value="eliminar"
          checked={selectedOption === 'eliminar'}
          onChange={handleRadioChange}
          className="radio-gestion-factura"
        />
        <Form.Check
          type="radio"
          name="radio-option"
          value="buscar"
          checked={selectedOption === 'buscar'}
          onChange={handleRadioChange}
          className="radio-gestion-factura"
        />        
      </Form.Group>

      <Form.Group className="tabla-gestion-factura">
      <div className="tabla-container">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID_encabezado_factura</th>
              <th>ID_usuario</th>
              <th>Fecha</th>
              <th>ID_cliente</th>
              <th>ID_producto</th>
              <th>Subtotal</th>
              <th>Total</th>
              <th>Impuesto</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {facturas.map((factura, index) => (
                <tr key={factura.id} className={index % 2 === 0 ? 'table-light' : 'table-secondary'}>
                  <td>{factura.id}</td>
                  <td>{factura.id_encabezado_factura}</td>
                  <td>{factura.id_usuario}</td>
                  <td>{factura.fecha}</td>
                  <td>{factura.id_cliente}</td>
                  <td>{factura.id_producto}</td>
                  <td>{factura.subtotal}</td>
                  <td>{factura.total}</td>
                  <td>{factura.impuesto}</td>
                  <td>{factura.cantidad}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        </div>
      </Form.Group>

      </Form.Group>

      <Form className={`superior-gestion-factura content ${isSidebarOpen ? 'superior-gestion-factura-fixed' : ''}`}>
        <h1>Gestión de facturas</h1>
        <FilterLeft className="filter-left-gestion-factura" onClick={toggleSidebar} />
        <BoxArrowRight className="box-arrow-right-gestion-factura" onClick={handleSalirHome} />
      </Form>
    </Form>
  );
}

export default GestionFactura;
