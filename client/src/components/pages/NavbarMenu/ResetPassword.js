import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import ResetPasswordForm from '../../forms/ResetPasswordForm/ResetPasswordForm';
import Loader from '../../Loader/Loader';
import { validateToken, resetPassword } from '../../../actions/auth';

class ResetPassword extends Component {
  state = {
    loading: true,
    success: false,
  };

  componentDidMount() {
    this.props
      .validateToken(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }

  submit = data =>
    this.props.resetPassword(data).then(() => this.props.history.push('/SignIn'));

  render() {
    const { loading, success } = this.state;
    const token = this.props.match.params.token;

    return (
      <div>
        {loading && (
          <React.Fragment>
            <Loader isUseWall />
            <Alert key="resetpassword_1_key" variant="info">
              Loading
            </Alert>
          </React.Fragment>
        )}

        {!loading && success && <ResetPasswordForm submit={this.submit} token={token} />}

        {!loading && !success && (
          <React.Fragment>
            <Alert key="resetpassword_3_key" variant="danger">
              <Alert.Heading> Oops. Invalid token</Alert.Heading>
            </Alert>
          </React.Fragment>
        )}
      </div>
    );
  }
}

ResetPassword.propTypes = {
  validateToken: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(
  null,
  { validateToken, resetPassword },
)(ResetPassword);
