import React from 'react';
import { Badge, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Routes } from '../../../constants';
import { Bookmark } from 'react-bootstrap-icons';

export function Navigation() {
  const { t } = useTranslation('nav');
  const favs = useSelector(({ redditState }) => redditState.gallery);
  const location = useLocation();

  return (
    <Nav className="justify-content-end" activeKey={location.pathname}>
      <Nav.Item>
        <Nav.Link eventKey={Routes.home.path} as="div">
          <Link to={Routes.home.path}>{t(Routes.home.label)}</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={Routes.gallery.path} as="div">
          <Link to={Routes.gallery.path}>
            <Bookmark />
            {' ' + t(Routes.gallery.label) + ' '}
            <Badge variant="info">{favs?.length || 0}</Badge>
          </Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
