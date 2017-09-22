import React from 'react'
import { Col } from 'react-bootstrap'
import { Page, Title, Content, theme } from './styled/theme'

import ReactMarkdown from 'react-markdown'


const WithThemePage = Page.extend`
  background-color: ${theme.darkGray};
  color: ${theme.offWhite};
`

const About = (props) => (
  <WithThemePage>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Title>{props.heading}</Title>
      <Content>
        <ReactMarkdown source={props.description} />
      </Content>
    </Col>
  </WithThemePage>
)

export default About;
