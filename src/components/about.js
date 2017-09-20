import React from 'react'
import { Col } from 'react-bootstrap'
import { Page, Title, StyledMarkdown, theme } from './styled/theme'


const WithThemePage = Page.extend`
  background-color: ${theme.darkGray};
  color: ${theme.offWhite};
`

const About = (props) => (
  <WithThemePage>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Title>{props.heading}</Title>
      <StyledMarkdown source={props.description} />
    </Col>
  </WithThemePage>
)

export default About;
