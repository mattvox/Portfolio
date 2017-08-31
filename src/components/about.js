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
  backgroundColor: '#242B3A',
  color: '#E6ECEE',
}

const About = (props) => (
  <Row style={style} className='page'>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <p className='page-title'>what makes me tick</p>
      <div>
        {/* <p>{props.description}</p> */}
        <Content>
          Simply put, I'm obsessed with creating. I love the constant challenge, the incredible culture and environment that surrounds web development today. I love the rapid pace in which technologies change and the approach to continuous learning one must adopt to succeed in this field.
        </Content>
        <Content>
          I pride myself not on being a master at any particular technology or tool, but a master at learning new things. I spend time each and every day learning a new skill and strive to best understand all that I find interesting and fun.
        </Content>
        <Content>
          My passion for software development is seemingly unending and the journey just as exciting today as it was when I wrote my first line of code nearly twenty years ago.
        </Content>
        <Content>
          I'm a better developer today than I was yesterday, and I'll be even better tomorrow.
        </Content>
      </div>
    </Col>
  </Row>
)

export default About;
