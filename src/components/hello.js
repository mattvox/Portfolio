import React from 'react';
import { Row, Col } from 'react-bootstrap';

import DownArrow from './down-arrow';

const parentStyle = {
    boxSizing: 'border-box',
    height: '100vh',
    position: 'relative',
    width: '100%',
  };

const childStyle = {
  position: 'absolute',
  top: '50%',
  width: '100%',
  transform: 'translateY(-50%)',
}

const Hello = (props) => (
  <div style={parentStyle}>
    <Row style={childStyle}>
      <Col xs={11} xsOffset={1} sm={11} smOffset={1} md={9} mdOffset={2}>
        <div>
          <p className='page-title'>{props.greeting}</p>
          <h2>{props.text}</h2>
        </div>
      </Col>
    </Row>
    <DownArrow />
  </div>
)

export default Hello;
