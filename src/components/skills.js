import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'

import { Page, Title, Content } from './styled/styled'

const WithColorPage = styled(Page)`
  background-color: #E6ECEE;
`

const Skills = (props) => (
  <WithColorPage>
    <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
      <Title>my current toolbox</Title>
    </Col>
    <Content>
      <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
        <Content>
          <p>
            While I primarily spend most of my time in the Javascript world, lately I've felt a strong pull over to Python and the sheer power it offers when tackling machine learning algorithms and data science.
          </p>
          <p>
            Staying focused on the web I've dipped my toe into Django a bit, but almost always find a way to include React and Redux into every app I write. A dash of functional programming and immutable data structures!? Sign me up, right now!
          </p>
          <p>
            To check out my recent open source projects, click on the GitHub icon below.
          </p>
        </Content>
      </Col>
      <Col xs={5} xsOffset={1} sm={2} smOffset={1} md={2} mdOffset={2}>
        {/* <Content> */}
        <Content>
          <p>Javascript</p>
          <p>Node.js</p>
          <p>React</p>
          <p>HTML5</p>
          <p>CSS3</p>
        </Content>
        {/* </Content> */}
      </Col>
      <Col xs={5} sm={2} md={1}>
        <Content>
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
        <Content>
          <p>◼◼◼◼◻◻</p>
          <p>◼◼◼◻◻◻</p>
          <p>◼◼◼◼◻◻</p>
          <p>◼◼◼◻◻◻</p>
        </Content>
      </Col>
    </Content>
  </WithColorPage>
)

export default Skills;
