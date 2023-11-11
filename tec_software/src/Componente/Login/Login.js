import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { EnvelopeFill, LockFill, PersonSquare } from 'react-bootstrap-icons';
import "./Login.css";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const iniciar_sesion  = () => {
  };

  return (
    <Form className="login">
      <Form className="rectangulo-login">
        <Form.Group className="rectangulo-login">

          <EnvelopeFill className="envelope-fill-login"/>

          <Form.Group className="clave-login">
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="entrada-texto-login"
            />
          </Form.Group>

          <LockFill className="lock-fill-login"/>
          <Form.Group className="correo-login">
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="entrada-texto-login"
            />
          </Form.Group>

          <PersonSquare className="person-square-login"/>

          <Button variant="boton-login " onClick={iniciar_sesion} className="boton-login ">
          Iniciar sesión
          </Button>

          {error && (
            <Form.Group className="texto-login">
              Usuario o contraseña incorrecta
            </Form.Group>
          )}

        </Form.Group>
      </Form>
    </Form>
  );
}

export default LoginForm;