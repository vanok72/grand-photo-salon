import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contacts = () => (
  <Form>
    <div>
      <h2>MESSAGE FROM AUTHOR</h2>
    </div>
    <Form.Group controlId="formBasicFullname">
      <Form.Label>YOUR FULL NAME</Form.Label>
      <Form.Control placeholder="Enter Full Name" />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>EMAIL</Form.Label>
      <Form.Control type="Email" placeholder="Enter Email" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlContent">
      <Form.Label>ENTER CONTENT</Form.Label>
      <Form.Control as="textarea" rows="3" />
    </Form.Group>
    <Button className="EntryFormButton" variant="outline-secondary" type="submit">
      SUBMIT
    </Button>
  </Form>
);

export default Contacts;
