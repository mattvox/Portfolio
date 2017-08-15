import React from 'react';
import { Container } from 'semantic-ui-react';


const Hello = (props) => (
  <Container>
    <div>
      <p>{props.greeting}</p>
      <p style={{ fontSize: '0.4em' }}>{props.text}</p>
    </div>
  </Container>
)

export default Hello;
