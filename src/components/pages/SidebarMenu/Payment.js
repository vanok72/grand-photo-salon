import React from 'react';
import { Form } from 'react-bootstrap';
import style from './Payment.less';

const Payment = () => (
  <Form>
    <div>
      <h2 className={style.rofl}>PAYMENT INFORMATIONS</h2>
    </div>
    <Form.Group controlId="formBasicFullname">
      <Form.Label>FULL NAME</Form.Label>
      <Form.Control placeholder="Enter Full Name" />
    </Form.Group>

    <Form.Group controlId="exampleForm.ControlFee">
      <Form.Label>GRAND PHOTO SALON - RIVNE : FEE PER SECTION</Form.Label>
      <Form.Control as="select">
        <option>any 1, 2 sections = 25 EUR</option>
        <option>any 3, 4 sections = 35 EUR</option>
      </Form.Control>
    </Form.Group>
  </Form>
);

export default Payment;
