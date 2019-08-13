import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import Loader from '../../Loader/Loader';

class ResetPasswordForm extends Component {
  state = {
    data: {
      token: this.props.token,
      password: '',
      passwordConfirmation: '',
    },
    loading: false,
    errors: {},
  };

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
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false }),
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!data.password) errors.password = "Can't be blank";
    if (data.password !== data.passwordConfirmation)
      errors.passwordConfirmation = 'Passwords must match';
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        {loading && <Loader isUseWall />}
        {errors.global && (
          <Alert key="resetpasswordform_1_key" variant="danger">
            <Alert.Heading>Something went wrong! You got an error!</Alert.Heading>
            <p>{errors.global}</p>
          </Alert>
        )}

        <Form.Group controlId="password">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={data.password}
            onChange={this.onChange}
            isInvalid={!!errors.password}
            placeholder="New Password"
          />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="passwordConfirmation">
          <Form.Label>Confirm your Password</Form.Label>
          <Form.Control
            name="passwordConfirmation"
            type="password"
            value={data.passwordConfirmation}
            onChange={this.onChange}
            isInvalid={!!errors.passwordConfirmation}
            placeholder="Confirm your Password"
          />
          <Form.Control.Feedback type="invalid">
            {errors.passwordConfirmation}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="outline-success" type="submit">
          SIGN IN
        </Button>
      </Form>
    );
  }
}

ResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

export default ResetPasswordForm;
