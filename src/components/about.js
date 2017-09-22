import React from 'react'
import { Col } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Page, Title, Content, theme } from './styled/theme'


const WithThemePage = Page.extend`
  background-color: ${theme.darkGray};
  color: ${theme.offWhite};
`

const About = ({ heading, description }) => (
  <WithThemePage>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Title>{heading}</Title>
      <Content>
        <ReactMarkdown source={description} />
      </Content>
    </Col>
  </WithThemePage>
)

export default About;
