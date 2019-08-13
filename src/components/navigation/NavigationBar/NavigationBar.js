import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../actions/auth';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import style from './NavigationBar.less';
import { allBooksSelector } from '../../../reducers/books';
import { setLocale } from '../../../actions/locale';

const NavigationBar = ({ isAuthenticated, user, logout, hasBooks, setLocale }) => (
  <Navbar as="header" className={style.navvbar} variant="dark">
    <Navbar.Brand href="/">
      <FormattedMessage id="nav_dashboard" defaultMessage="Dashboard" />
    </Navbar.Brand>
    <Nav className={[style.fullwidth, 'justify-content-end']}>
      <a role="button" onClick={() => setLocale('en')}>
        EN
      </a>
      |
      <a role="button" onClick={() => setLocale('ru')}>
        RU
      </a>
      {isAuthenticated ? (
        <React.Fragment>
          {hasBooks && (
            <Nav.Link as={Link} to="/books/new">
              Add new book
            </Nav.Link>
          )}
          <Navbar.Text>Signed in as: </Navbar.Text>
          <NavDropdown title={user.email} id="UserInfoIcon">
            <NavDropdown.Item as={Link} to="/HomeUser">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Password">
              Password
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} onClick={() => logout()} to="/">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Nav.Link as={Link} to="/SignIn">
            Sign in
          </Nav.Link>
          <Nav.Link as={Link} to="/SignUp">
            Sign up
          </Nav.Link>
        </React.Fragment>
      )}
    </Nav>
  </Navbar>
);

NavigationBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  hasBooks: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  setLocale: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email,
    user: state.user,
    hasBooks: allBooksSelector(state).length > 0,
  };
}

export default connect(
  mapStateToProps,
  { logout: actions.logout, setLocale },
)(NavigationBar);
