import React from 'react';
import { Row, Col } from 'react-bootstrap';

const style={
  fontSize: '0.3em',
}


const Skills = (props) => (
  <div>
    <Row>
      <Col xs={12} xsOffset={0} sm={11} smOffset={1} md={9} mdOffset={2}>
        <p className='content-title'>Tools I use</p>
      </Col>
    </Row>
    <Row style={style}>
      <Col xs={6} sm={3} md={3}>
        <p>Javascript</p>
        <p>HTML5</p>
        <p>CSS3</p>
      </Col>
      <Col xs={6} sm={3} md={3}>
        <p>◼◼◼◼◼◻</p>
        <p>◼◼◼◼◻◻</p>
        <p>◼◼◼◼◻◻</p>
      </Col>
      <Col xs={6} sm={3} md={3}>
        <p>Node.js</p>
        <p>Python</p>
        <p>Django</p>
      </Col>
      <Col xs={6} sm={3} md={3}>
        <p>◼◼◼◼◼◻</p>
        <p>◼◼◼◼◼◻</p>
        <p>◼◼◼◻◻◻</p>
      </Col>
      <Col xs={6} sm={3} md={3}>
        <p>React</p>
        <p>Mongo</p>
        <p>Postgres</p>
      </Col>
      <Col xs={6} sm={3} md={3}>
        <p>◼◼◼◼◼◻</p>
        <p>◼◼◼◼◻◻</p>
        <p>◼◼◼◻◻◻</p>
      </Col>
    </Row>
  </div>
)

export default Skills;
