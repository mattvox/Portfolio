import React from 'react';
import { Container } from 'semantic-ui-react';
// import { Grid, Row, Col } from 'react-bootstrap';

const App = (props) => (
  <Container fluid>
    {props.children}
  </Container>
)

// const App = (props) => (
//   <Grid>
//     {props.children}
//   </Grid>
// )

export default App;
