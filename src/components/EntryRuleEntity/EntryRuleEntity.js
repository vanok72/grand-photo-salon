import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const EntryRuleEntity = props => (
  <div>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={props.RuleId}>
        {props.RuleName}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.RuleId}>
        <Card.Body>{props.RuleBody}</Card.Body>
      </Accordion.Collapse>
    </Card>
  </div>
);

export default EntryRuleEntity;
