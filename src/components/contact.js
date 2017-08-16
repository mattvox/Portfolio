import React from 'react';
import { Row, Col } from 'react-bootstrap';

const style = {
  fontSize: '0.3em',
}

const Contact = (props) => (
  <div>
    <Row>
      <Col xs={12} sm={11} smOffset={1} md={9} mdOffset={2}>
        <p className='content-title'>Stalk me</p>
      </Col>
    </Row>
    <Row style={style}>
      <Col xs={12}>
        <p>write: mattbliffert@icloud.com</p>
      </Col>
      <Col xs={12}>
        <p>visit: github.com/mattvox</p>
      </Col>
      <Col xs={12}>
        <p>some other form of contact should go here</p>
      </Col>
    </Row>
  </div>
)

export default Contact;
