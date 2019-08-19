import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

UserRoute.propTypes = {
  component: PropTypes.shape({
    WrappedComponent: PropTypes.func.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToPage(state) {
  return {
    isAuthenticated: !!state.user.email,
  };
}

export default connect(mapStateToPage)(UserRoute);
