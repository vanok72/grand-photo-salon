import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Button, Alert } from 'react-bootstrap';
import isEmail from 'validator/lib/isEmail';
import Loader from '../../Loader/Loader';
import styles from './SignupForm.less';

import { createUserRequest } from '../../../actions/users';

class SignupForm extends React.Component {
  state = {
    data: {
      email: '',
      username: '',
      password: '',
    },
    loading: false,
    errors: {},
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.serverErrors, loading: false });
  }

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  onSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.username) errors.username = "Can't be blank";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        {loading && <Loader isUseWall />}
        {errors.global && (
          <Alert key="signup_1_key" variant="danger">
            <Alert.Heading>Something went wrong! You got an error!</Alert.Heading>
            <p>{errors.global}</p>
          </Alert>
        )}
        <Form.Group controlId="email">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={data.email}
            onChange={this.onChange}
            isInvalid={!!errors.email}
            placeholder="Enter Email"
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="username">
          <Form.Label>USERNAME</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={data.username}
            onChange={this.onChange}
            isInvalid={!!errors.username}
            placeholder="Enter Username"
          />
          <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={data.password}
            onChange={this.onChange}
            isInvalid={!!errors.password}
            placeholder="Password"
          />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>
        <Button className={styles.red} variant="outline-success" type="submit">
          SIGN UP
        </Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    serverErrors: state.formErrors.signup,
  };
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { submit: createUserRequest },
)(SignupForm);
