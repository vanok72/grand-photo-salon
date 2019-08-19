import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../../forms/LoginForm/LoginForm';
import { login } from '../../../actions/auth';

class SignIn extends Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push('/HomeUser'));

  render() {
    return (
      <div>
        <h4>SIGN INTO YOUR ACCOUNT</h4>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(
  null,
  { login },
)(SignIn);
