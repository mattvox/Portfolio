import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Col, Button } from 'react-bootstrap'

import sgMail from '@sendgrid/mail'
import { SEND_GRID } from '../../settings_local'

sgMail.setApiKey(SEND_GRID)


export default class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      web: '',
      message: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
    console.log(this.state[e.target.id])
  }

  handleSubmit(e) {
    e.preventDefault()

    const { name, email, web, message } = this.state

    const formMessage = {
      to: 'mattbliffert@icloud.com',
      from: email,
      subject: 'New Message From Blif.io',
      text: `Name: ${name} Website: ${web} Message: ${message}`
    }

    sgMail.send(formMessage)
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup
          controlId='name'
          value={'value' + this.state.name.value}
          onChange={this.handleChange}
        >
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
            <FormControl type="name" placeholder="name" />
          </Col>
        </FormGroup>
        <FormGroup controlId='email' onChange={this.handleChange}>
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
            <FormControl type="email" placeholder="email" />
          </Col>
        </FormGroup>
        <FormGroup controlId='web' onChange={this.handleChange}>
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
            <FormControl type="web" placeholder="web (optional)" />
          </Col>
        </FormGroup>
        <FormGroup controlId="message" onChange={this.handleChange}>
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
            <FormControl componentClass="textarea" placeholder="" />
          </Col>
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
