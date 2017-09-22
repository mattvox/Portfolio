import React from 'react'
import { Col } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

import ContactForm from './forms/contact-form'
import { Page, Title, Content, theme } from './styled/theme'


const WithColorPage = Page.extend`
  background-color: ${theme.lightBlue};
  color: ${theme.darkGray};
  text-align: center;
`

const Contact = (props) => (
  <WithColorPage>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Title>{props.heading}</Title>
      <Content>
        <ReactMarkdown source={props.description} />
      </Content>
      {/* <ContactForm /> */}
    </Col>
  </WithColorPage>
)

export default Contact;
