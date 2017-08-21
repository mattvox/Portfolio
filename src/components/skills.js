import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Skills = (props) => (
    <Row className='page'>
      <Col xs={12} sm={11} smOffset={1} md={9} mdOffset={2}>
        <p className='page-title'>Tools I use</p>
      </Col>
      <Col xs={5} sm={2} smOffset={1} md={2} mdOffset={2}>
        <div className='content'>
          <p>Javascript</p>
          <p>Node.js</p>
          <p>React</p>
          <p>HTML5</p>
          <p>CSS3</p>
        </div>
      </Col>
      <Col xs={5} xsOffset={1} sm={2} md={2} mdOffset={0}>
        <div className='content'>
          <p>◼◼◼◼◼◻</p>
          <p>◼◼◼◼◼◻</p>
          <p>◼◼◼◼◼◻</p>
          <p>◼◼◼◼◻◻</p>
          <p>◼◼◼◼◻◻</p>
        </div>
      </Col>
      <Col xs={5} sm={2} smOffset={1} md={2}>
        <div className='content'>
          <p>Python</p>
          <p>Django</p>
          <p>Mongo</p>
          <p>Postgres</p>
        </div>
      </Col>
      <Col xs={5} xsOffset={1} sm={2} md={2} mdOffset={0}>
        <div className='content'>
          <p>◼◼◼◼◻◻</p>
          <p>◼◼◼◻◻◻</p>
          <p>◼◼◼◼◻◻</p>
          <p>◼◼◼◻◻◻</p>
        </div>
      </Col>
    </Row>
)

export default Skills;
