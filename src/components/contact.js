import React from 'react';
import { Row, Col } from 'react-bootstrap';

const style = {
  backgroundColor: '#ccc',
}

const Contact = (props) => (
    <Row style={style} className='page'>
      <Col xs={12} sm={11} smOffset={1} md={9} mdOffset={2}>
        <p className='page-title'>Stalk me</p>
      </Col>
      <Col xs={12} sm={11} smOffset={1} md={9} mdOffset={2}>
        <p className='content'>write: mattbliffert@icloud.com</p>
      </Col>
      <Col xs={12} sm={11} smOffset={1} md={9} mdOffset={2}>
        <p className='content'>visit: github.com/mattvox</p>
      </Col>
      <Col xs={12} sm={11} smOffset={1} md={9} mdOffset={2}>
        <p className='content'>some other form of contact should go here</p>
      </Col>
    </Row>
)

export default Contact;
