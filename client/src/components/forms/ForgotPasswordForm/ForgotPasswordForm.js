import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Alert } from 'react-bootstrap';
import isEmail from 'validator/lib/isEmail';
import Loader from '../../Loader/Loader';
import styles from './ForgotPasswordForm.less';

class ForgotPassworForm extends React.Component {
  state = {
    data: {
      email: '',
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
    if (!isEmail(data.email)) errors.email = 'Invalid email';
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        {loading && <Loader isUseWall />}
        {errors.global && (
          <Alert key="forgotpasswordform_1_key" variant="danger">
            <Alert.Heading>You got an error!</Alert.Heading>
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
        <Button className={styles.red} variant="outline-success" type="submit">
          Send password
        </Button>
      </Form>
    );
  }
}

ForgotPassworForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ForgotPassworForm;
