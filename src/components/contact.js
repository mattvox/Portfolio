import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'

import ContactForm from './forms/contact-form'
import { Page, Title, StyledMarkdown } from './styled/styled'

const WithColorPage = styled(Page)`
  background-color: #a0c2c3;
  color: #242B3A;
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
