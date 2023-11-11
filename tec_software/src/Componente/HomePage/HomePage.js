import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FilterLeft, BoxArrowRight } from 'react-bootstrap-icons';
import "./HomePage.css";
import Sidebar from '../SideBar/SideBar';

function HomePageAdmin() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [contentShifted, setContentShifted] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSalirHome  = () => {
  };

  useEffect(() => {
    // Almacena y restaura la posición original del contenido
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
  }, [isSidebarOpen]);

  return (
    <Form className={`home ${isSidebarOpen ? 'content-shifted-home' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Form className={`inferior-home ${isSidebarOpen ? 'inferior-home-shifted' : ''}`}>
        <h1>Copyright © 2023 TECSoftware</h1>
      </Form>
      <Form className={`superior-home content ${isSidebarOpen ? 'superior-home-fixed' : ''}`}>
        <h1>¡Bienvenido!</h1>
        <FilterLeft className="filter-left-home" onClick={toggleSidebar} />
        <BoxArrowRight className="box-arrow-right-home" onClick={handleSalirHome} />
      </Form>
    </Form>
  );
}

export default HomePageAdmin;
