import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { resetPasswordRequest } from '../../../actions/auth';
import ForgotPasswordForm from '../../forms/ForgotPasswordForm/ForgotPasswordForm';

class ForgotPassword extends Component {
  state = {
    success: false,
  };

  submit = data =>
    this.props.resetPasswordRequest(data).then(() => this.setState({ success: true }));

  render() {
    return (
      <div>
        {this.state.success ? (
          <Alert key="forgotpassword_1_key" variant="info">
            <Alert.Heading>Email has been sent!</Alert.Heading>
          </Alert>
        ) : (
          <ForgotPasswordForm submit={this.submit} />
        )}
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired,
};

export default connect(
  null,
  { resetPasswordRequest },
)(ForgotPassword);
