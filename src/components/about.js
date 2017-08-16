import React from 'react';
import { Row, Col } from 'react-bootstrap';

const style = {
  fontSize: '0.3em',
}

const About = (props) => (
  <Row>
    <Col xs={12} sm={11} smOffset={1} md={9} mdOffset={2}>
      <p className='content-title'>About me</p>
      <div style={style}>
        <p>
          I'm obsessed with creating. I love the constant challenge, the incredible culture and environment that surround web development today. I love the rapid pace in which technologies change and the approach to continuous learning one must adopt to succeed in this field.
        </p>
        <p>
          I'm obsessed with creating. I love the constant challenge, the incredible culture and environment that surround web development today. I love the rapid pace in which technologies change and the approach to continuous learning one must adopt to succeed in this field.
        </p>
        <p>
          Food is pretty good too. And cats.
        </p>
      </div>
    </Col>
  </Row>
)

export default About;
