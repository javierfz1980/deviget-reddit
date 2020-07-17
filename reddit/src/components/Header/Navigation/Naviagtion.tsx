import React from 'react';
import { Badge, Nav } from 'react-bootstrap';

export function Navigation() {
  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/favs">
          Favs <Badge variant="info">9</Badge>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
