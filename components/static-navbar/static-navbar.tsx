'use client';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { mainMenuMockData } from '@/mock/main-menu';

function StaticNavbar() {
  const { items } = mainMenuMockData;
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Laz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {items.map((item, i) => <Nav.Link href={item.slug} key={Math.random() + i}>{item.label}</Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StaticNavbar;