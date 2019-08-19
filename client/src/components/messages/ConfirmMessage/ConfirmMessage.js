import React from 'react';
import { Alert } from 'react-bootstrap';

const ConfirmMessage = () => {
  return (
    <Alert variant="warning">
      <Alert.Heading>Please verify your email!</Alert.Heading>
    </Alert>
  );
};

export default ConfirmMessage;
