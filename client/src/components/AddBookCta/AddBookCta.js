import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddBookCta = () => (
  <Card>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Add new book</Card.Title>
      <Button as={Link} to="/books/new" variant="outline-secondary" type="button">
        +
      </Button>
    </Card.Body>
  </Card>
);

export default AddBookCta;
