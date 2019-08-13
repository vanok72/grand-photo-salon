import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import Loader from '../../Loader/Loader';
import styles from './LoginForm.less';

class LoginForm extends React.Component {
  state = {
    data: {
      login: '',
      password: '',
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
    if (!data.login) errors.login = 'Invalid email or username';
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        {loading && <Loader isUseWall />}
        {errors.global && (
          <Alert key="login_1_key" variant="danger">
            <Alert.Heading>Something went wrong! You got an error!</Alert.Heading>
            <p>{errors.global}</p>
          </Alert>
        )}
        <Form.Group controlId="login">
          <Form.Label>EMAIL OR USERNAME</Form.Label>
          <Form.Control
            type="text"
            name="login"
            value={data.login}
            onChange={this.onChange}
            isInvalid={!!errors.login}
            placeholder="Enter Email Or Username"
          />
          <Form.Control.Feedback type="invalid">{errors.login}</Form.Control.Feedback>
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
        {/* {errors.password && <InlineError text={errors.password} />} */}

        <Button
          as={Link}
          to="/ForgotPassword"
          className={styles.red}
          variant="outline-secondary"
          type="button"
        >
          FORGOTTEN PASSWORD?
        </Button>
        <Button className={styles.red} variant="outline-success" type="submit">
          SIGN IN
        </Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default LoginForm;
