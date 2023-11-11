import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import './SideBar.css';

const SideBar = ({ isOpen, toggleSidebar }) => {
  const sidebarClass = isOpen ? 'sidebar open' : 'sidebar';

  return (
    <div className={sidebarClass}>
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/persona" activeClassName="active">Persona</NavLink>
        </li>
        <li>
          <NavLink to="/sucursal" activeClassName="active">Sucursal</NavLink>
        </li>
        <li>
          <NavLink to="/producto" activeClassName="active">Producto</NavLink>
        </li>
        <li>
          <NavLink to="/empleado" activeClassName="active">Empleado</NavLink>
        </li>
        <li>
          <NavLink to="/cliente" activeClassName="active">Cliente</NavLink>
        </li>
        <li>
          <NavLink to="/usuario" activeClassName="active">Usuario</NavLink>
        </li>
        <li>
          <NavLink to="/rol" activeClassName="active">Rol</NavLink>
        </li>
        <li>
          <NavLink to="/tiene" activeClassName="active">Tiene</NavLink>
        </li>
        <li>
          <NavLink to="/encabezado_factura" activeClassName="active">Encabezado factura</NavLink>
        </li>
        <li>
          <NavLink to="/detalle_factura" activeClassName="active">Detalle factura</NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">Gestión de facturas</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
