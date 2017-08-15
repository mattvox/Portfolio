import React from 'react';
import { Container, Grid } from 'semantic-ui-react';


const Contact = (props) => (
  <Container>
    <p>Stalk me</p>
  <Grid columns={2} stackable>
      <Grid.Row>
        <Grid.Column>
          <p style={{ fontSize: '0.3em', fontWeight: '100' }}>write</p>
        </Grid.Column>
        <Grid.Column>
          <p style={{ fontSize: '0.3em' }}>mattbliffert@icloud.com</p>
        </Grid.Column>
        <Grid.Column>
          <p style={{ fontSize: '0.3em', fontWeight: '100' }}>visit</p>
        </Grid.Column>
        <Grid.Column>
          <p style={{ fontSize: '0.3em' }}>github.com/mattvox</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default Contact;
