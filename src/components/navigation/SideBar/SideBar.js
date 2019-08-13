import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../actions/auth';
import style from './SideBar.less';

const SideBar = () => (
  <Col xl={3} className={['d-flex flex-column', style.navbarbackground]}>
    <Navbar collapseOnSelect className={['d-flex align-items-center']} expand="lg">
      <Navbar.Toggle className="p-0 d-md-none ml-3 btn btn-link" />
      <Navbar.Collapse>
        <Nav className="mr-auto d-block">
          <Nav.Item>
            <Nav.Link eventKey="1" as={Link} to="/Home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {' '}
            <Nav.Link eventKey="2" as={Link} to="/characters">
              <FormattedMessage id="nav_characters" defaultMessage="My Characters" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {' '}
            <Nav.Link eventKey="3" as={Link} to="/EntryForm">
              Entry form
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {' '}
            <Nav.Link eventKey="4" as={Link} to="/Payment">
              Payment
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {' '}
            <Nav.Link eventKey="5" as={Link} to="/Status">
              Status
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {' '}
            <Nav.Link eventKey="6" as={Link} to="/Results">
              Results
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {' '}
            <Nav.Link eventKey="7" as={Link} to="/Contacts">
              Contacts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {' '}
            <Nav.Link eventKey="8" as={Link} to="/EntryRules">
              Entry rules
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Col>
);

export default SideBar;
