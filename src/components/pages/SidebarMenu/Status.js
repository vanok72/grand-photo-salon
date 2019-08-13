import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './Status.less';

const Status = () => (
  <Form>
    <div className={styles.rofl}>
      <h2>SIGN IN INTO YOUR ACCOUNT TO CHECK THE STATUS</h2>
    </div>
    <div className={styles.rofl}>
      <h4>SIGN INTO YOUR ACCOUNT</h4>
    </div>
    <Form.Group controlId="formBasicEmailOrName">
      <Form.Label>EMAIL OR USERNAME</Form.Label>
      <Form.Control placeholder="Enter Email Or Username" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button className={styles.StatusButton} variant="outline-secondary" type="button">
      FORGOTTEN PASSWORD?
    </Button>
    <Button className={styles.StatusButton} variant="outline-success" type="submit">
      SIGN IN
    </Button>
  </Form>
);

export default Status;
