import React from 'react';
import { Badge, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import { Routes } from '../../../constants';

export function Navigation() {
  const favs = useSelector(({ redditState }) => redditState.favs);
  const location = useLocation();

  return (
    <Nav className="justify-content-end" activeKey={location.pathname}>
      <Nav.Item>
        <Nav.Link eventKey={Routes.home.path} as="div">
          <Link to={Routes.home.path}>Home</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={Routes.favs.path} as="div">
          <Link to={Routes.favs.path}>
            Favs <Badge variant="info">{favs?.length || 0}</Badge>
          </Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
