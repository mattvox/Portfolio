import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'

import { Page, Title, StyledMarkdown } from './styled/styled'

const WithColorPage = styled(Page)`
  background-color: #242B3A;
  color: #E6ECEE;
`

const About = (props) => (
  <WithColorPage>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Title>what makes me tick</Title>
      <StyledMarkdown source={props.description} />
    </Col>
  </WithColorPage>
)

export default About;
