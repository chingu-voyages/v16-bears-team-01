import React, { useState } from "react";
//import {withRouter} from 'react-router-dom'
import { Navbar, Nav, Modal } from "react-bootstrap";

import { LoginForm } from "../User/LoginForm";
import { RegisterForm } from "../User/RegisterForm";

export function HeaderSection() {
  //login modal
  const [loginShow, setLoginShow] = useState(false);
  const handleLoginClose = () => setLoginShow(false);
  const handleLoginShow = () => setLoginShow(true);
  //register modal
  const [registerShow, setRegisterShow] = useState(false);
  const handleRegisterClose = () => setRegisterShow(false);
  const handleRegisterShow = () => setRegisterShow(true);
  
  return (
    <>
      <Navbar 
        sticky="top"
        variant={"light"}  // "dark"
        expand="md"
      >
        <Navbar.Brand href="#home">I bet I will ...</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Bets</Nav.Link>
            <Nav.Link href="#">Activity</Nav.Link>
            <Nav.Link href="#">Friends</Nav.Link>
            <div className="dropdown-divider"></div>
            <Nav.Link 
              href="#"
              eventKey={0}
              onSelect={handleRegisterShow}
            >
              Sign Up 
            </Nav.Link>
            <Nav.Link 
              href="#"
              eventKey={1}
              onSelect={handleLoginShow}
            >
              Log in 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={loginShow} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={registerShow} onHide={handleRegisterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
