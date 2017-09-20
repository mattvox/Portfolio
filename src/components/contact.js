import React from 'react'
import { Col } from 'react-bootstrap'

import ContactForm from './forms/contact-form'
import { Page, Title, StyledMarkdown, theme } from './styled/theme'


const WithColorPage = Page.extend`
  background-color: ${theme.lightBlue};
  color: ${theme.darkGray};
  text-align: center;
`

const Contact = (props) => (
  <WithColorPage>
    <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Title>{props.heading}</Title>
      <StyledMarkdown source={props.description} />
      {/* <ContactForm /> */}
    </Col>

  </WithColorPage>
)

export default Contact;
