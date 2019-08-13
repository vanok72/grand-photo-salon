import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './EntryForm.less';

const EntryForm = () => (
  <Form>
    <div>
      <h2 className={styles.rofl}>REGISTER</h2>
    </div>
    <Form.Group controlId="formBasicFirstname">
      <Form.Label>FIRST NAME</Form.Label>
      <Form.Control placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group controlId="formBasicLastname">
      <Form.Label>LAST NAME</Form.Label>
      <Form.Control placeholder="Enter Last Name" />
    </Form.Group>

    <Form.Group controlId="formBasicAddress">
      <Form.Label>ADDRESS</Form.Label>
      <Form.Control placeholder="Enter Address" />
    </Form.Group>

    <Form.Group controlId="formBasicCity">
      <Form.Label>City</Form.Label>
      <Form.Control placeholder="Enter City" />{' '}
    </Form.Group>

    <Form.Group controlId="formBasicPostalcode">
      <Form.Label>POSTAL CODE</Form.Label>
      <Form.Control placeholder="Enter Postal Code" />
    </Form.Group>

    <Form.Group controlId="formBasicCountry">
      <Form.Label>COUNTRY</Form.Label>
      <Form.Control placeholder="Country" />
    </Form.Group>

    <Form.Group controlId="formBasicTelephone">
      <Form.Label>TELEPHONE</Form.Label>
      <Form.Control placeholder="Enter Telephone" />
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
      <Form.Label>EMAIL</Form.Label>
      <Form.Control placeholder="Enter Email" />
    </Form.Group>

    <Form.Group controlId="formBasicWebsite">
      <Form.Label>WEB SITE</Form.Label>
      <Form.Control placeholder="Enter Web Site" />
    </Form.Group>

    <Form.Group controlId="formBasicHonor">
      <Form.Label>HONOR</Form.Label>
      <Form.Control placeholder="Enter Honor" />
    </Form.Group>

    <Form.Group controlId="formBasicOrganization">
      <Form.Label>ORGANIZATION</Form.Label>
      <Form.Control placeholder="Enter Organization" />
    </Form.Group>

    <Form.Group controlId="formBasicChecbox">
      <Form.Check
        type="checkbox"
        label="hereby I expressly agree to the { }  (Conditions for application and regulations for organization of international photographic events) and especially to its chapter II (Regulations for International photographic events under FIAP patronage) dealing  under Section II.2 with the FIAP participation rules and the red list."
      />
    </Form.Group>

    <Button className={styles.EntryFormButton} variant="outline-secondary" type="submit">
      Register
    </Button>
  </Form>
);

export default EntryForm;
