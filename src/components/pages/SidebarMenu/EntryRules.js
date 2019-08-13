import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import EntryRuleEntity from '../../EntryRuleEntity/EntryRuleEntity';

class EntryRules extends Component {
  state = {
    rules: [
      {
        id: '0',
        name: 'ORGANIZER',
        body: 'photo club - FC GRAND - Rivne, Ukraine',
      },
      {
        id: '1',
        name: 'PARTICIPATION',
        body:
          'The salon is open to amateur and professional photographers from all over the world. Each photo can be presented in only one section. When an entrant submits images which are significantly similar to each other, only one of the images will be accepted, even if the images are entered in different sections.  An entrant’s four images will be distributed throughout four rounds of judging for every section. Entries must originate as photographs made by the entrant.',
      },
      {
        id: '2',
        name: 'SECTIONS',
        body:
          'There are four sections, all DIGITAL:' +
          'A) Open Color    B) Open Monochrome    C) Travel   D) Nature',
      },
      {
        id: '3',
        name: 'ENTRY FEE',
        body:
          '25 Eur (25$) for 1-2 sections 35 Eur (40$) for 3-4 sections оплата для учасників з України 300гр за всі 4 секції на карту Приват банку 4149 6054 6605 9730 Анатолій Волох',
      },
      {
        id: '4',
        name: 'EVENTS CALENDAR',
        body:
          '25 Eur (25$) for 1-2 sections 35 Eur (40$) for 3-4 sections оплата для учасників з України 300гр за всі 4 секції на карту Приват банку 4149 6054 6605 9730 Анатолій Волох',
      },
      {
        id: '5',
        name: 'ENTRY FEE',
        body:
          '25 Eur (25$) for 1-2 sections 35 Eur (40$) for 3-4 sections оплата для учасників з України 300гр за всі 4 секції на карту Приват банку 4149 6054 6605 9730 Анатолій Волох',
      },
      {
        id: '6',
        name: 'ENTRY FEE',
        body:
          '25 Eur (25$) for 1-2 sections 35 Eur (40$) for 3-4 sections оплата для учасників з України 300гр за всі 4 секції на карту Приват банку 4149 6054 6605 9730 Анатолій Волох',
      },
      {
        id: '7',
        name: 'ENTRY FEE',
        body:
          '25 Eur (25$) for 1-2 sections 35 Eur (40$) for 3-4 sections оплата для учасників з України 300гр за всі 4 секції на карту Приват банку 4149 6054 6605 9730 Анатолій Волох',
      },
      {
        id: '8',
        name: 'ENTRY FEE',
        body:
          '25 Eur (25$) for 1-2 sections 35 Eur (40$) for 3-4 sections оплата для учасників з України 300гр за всі 4 секції на карту Приват банку 4149 6054 6605 9730 Анатолій Волох',
      },
      {
        id: '9',
        name: 'ENTRY FEE',
        body:
          '25 Eur (25$) for 1-2 sections 35 Eur (40$) for 3-4 sections оплата для учасників з України 300гр за всі 4 секції на карту Приват банку 4149 6054 6605 9730 Анатолій Волох',
      },
      {
        id: '10',
        name: 'ENTRY FEE',
        body:
          '25 Eur (25$) for 1-2 sections 35 Eur (40$) for 3-4 sections оплата для учасників з України 300гр за всі 4 секції на карту Приват банку 4149 6054 6605 9730 Анатолій Волох',
      },
      {
        id: '11',
        name: 'ENTRY FEE',
        body:
          '25 Eur (25$) for 1-2 sections 35 Eur (40$) for 3-4 sections оплата для учасників з України 300гр за всі 4 секції на карту Приват банку 4149 6054 6605 9730 Анатолій Волох',
      },
    ],
  };

  render() {
    return (
      <div>
        <Accordion defaultActiveKey="0">
          {this.state.rules.map(rules => {
            return (
              <EntryRuleEntity
                RuleName={rules.name}
                RuleBody={rules.body}
                RuleId={rules.id}
                key={rules.id + rules.name}
              />
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default EntryRules;
