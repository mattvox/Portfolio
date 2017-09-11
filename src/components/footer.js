import React from 'react';
import { Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'

import { Page } from './styled/styled'

const Icon = styled.a`
  font-size: 3.5em;
  color: #E6ECEE;
  text-align: center;
  padding: 0 20px 0 20px;

  &:link {
    color: #E6ECEE;
  }
  &:visited {
    color: #E6ECEE;
  }
  &:hover {
    color: #ACB8BC;
  }
  &:active {
    color: #E6ECEE;
  }
`

const Copyright = styled.div`
  font-size: 1.5em;
  color: #E6ECEE;
  text-align: center;
  padding: 20px;
`

const Footer = () => (
  <Page style={{ backgroundColor: '#242B3A' }}>
    <Col xs={10} xsOffset={1} style={{ textAlign: 'center' }}>
      <Icon href="https://www.github.com/mattvox" target="_blank">
        <FontAwesome name='github' />
      </Icon>
      <Icon href="mailto:mattbliffert@icloud.com">
        <FontAwesome name='envelope' />
      </Icon>
      <Icon href="https://www.linkedin.com/in/mbliffert" target="_blank">
        <FontAwesome name='linkedin' />
      </Icon>
    </Col>
    <Col xs={10} xsOffset={1}>
      <Copyright>Handcrafted by me © 2017 </Copyright>
    </Col>
  </Page>
)

export default Footer;
