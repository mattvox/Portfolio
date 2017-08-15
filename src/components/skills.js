import React from 'react';
import { Container, Grid } from 'semantic-ui-react';


const Skills = (props) => (
  <Container>
    <p>Tools I use</p>
  <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <p style={{ fontSize: '0.3em' }}>Javascript</p>
          <p style={{ fontSize: '0.3em' }}>HTML5</p>
          <p style={{ fontSize: '0.3em' }}>CSS3</p>
        </Grid.Column>
        <Grid.Column>
          <p style={{ fontSize: '0.3em' }}>Python</p>
        <p style={{ fontSize: '0.3em' }}>React</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default Skills;
