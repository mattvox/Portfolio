import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const Content = styled.div`
  font-size: 1.5em;
  font-weight: normal;
  margin: 0;
  padding: 20px;
`

const style = {
  backgroundColor: '#EEE',
  color: '#3F4549',
}

const toRight = {
  textAlign: 'right',
}

const Skills = (props) => (
    <Row className='page' style={style}>
      <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
        <p className='page-title'>my current toolbox</p>
      </Col>
      <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
        <div>
          <Content>
            While I primarily spend most of my time in the Javascript world, lately I've felt a strong pull over to Python and the sheer power it offers when tackling machine learning algorithms and data science.
          </Content>
          <Content>
            Staying focused on the web I've dipped my toe into Django a bit, but almost always find a way to include React and Redux into every app I write. A dash of functional programming and immutable data structures!? Sign me up, right now!
          </Content>
          <Content>
            To check out my recent open source projects, click on the GitHub icon below.
          </Content>
        </div>
      </Col>
      <Col xs={5} xsOffset={1} sm={2} smOffset={1} md={2} mdOffset={2}>
        <Content>
          <p>Javascript</p>
          <p>Node.js</p>
          <p>React</p>
          <p>HTML5</p>
          <p>CSS3</p>
        </Content>
      </Col>
      <Col xs={5} sm={2} md={1}>
        <Content style={toRight}>
          <p>◼◼◼◼◼◻</p>
          <p>◼◼◼◼◼◻</p>
          <p>◼◼◼◼◼◻</p>
          <p>◼◼◼◼◻◻</p>
          <p>◼◼◼◼◻◻</p>
        </Content>
      </Col>
      <Col xs={5} xsOffset={1} sm={2} smOffset={2} mdOffset={1}>
        <Content>
          <p>Python</p>
          <p>Django</p>
          <p>Mongo</p>
          <p>Postgres</p>
        </Content>
      </Col>
      <Col xs={5} sm={2} md={1}>
        <Content style={toRight}>
          <p>◼◼◼◼◻◻</p>
          <p>◼◼◼◻◻◻</p>
          <p>◼◼◼◼◻◻</p>
          <p>◼◼◼◻◻◻</p>
        </Content>
      </Col>
    </Row>
)

export default Skills;
