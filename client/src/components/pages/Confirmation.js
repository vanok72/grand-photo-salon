import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { confirm } from '../../actions/auth';
import Loader from '../Loader/Loader';

class Confirmation extends Component {
  state = {
    loading: true,
    success: false,
  };

  componentDidMount() {
    this.props
      .confirm(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }

  render() {
    const { loading, success } = this.state;

    return (
      <div>
        {loading && (
          <React.Fragment>
            <Loader isUseWall />
            <Alert key="confirmation_1_key" variant="info">
              Validating your email
            </Alert>
          </React.Fragment>
        )}

        {!loading && success && (
          <React.Fragment>
            <Alert key="confirmation_2_key" variant="success">
              <Alert.Heading> Thank you. Your account has been verified.</Alert.Heading>
              <Link to="/HomeUser">Go to Your Profile page</Link>
            </Alert>
          </React.Fragment>
        )}

        {!loading && !success && (
          <React.Fragment>
            <Alert key="confirmation_3_key" variant="danger">
              <Alert.Heading> Oops. Invalid token</Alert.Heading>
            </Alert>
          </React.Fragment>
        )}
      </div>
    );
  }
}

Confirmation.propTypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(
  null,
  { confirm },
)(Confirmation);
