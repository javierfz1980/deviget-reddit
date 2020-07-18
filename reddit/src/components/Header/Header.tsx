import React from 'react';

import styles from './Header.module.scss';
import { Navbar } from 'react-bootstrap';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <Navbar bg="light" expand="lg" className={styles.header}>
      <Navbar.Brand href="/home">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Navigation />
      </Navbar.Collapse>
    </Navbar>
  );
}
