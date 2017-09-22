import React from 'react';
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import { Col } from 'react-bootstrap'
import { Page, Content, theme } from './styled/theme'


const Icon = styled.a`
  font-size: 3.5em;
  color: #E6ECEE;
  text-align: center;
  padding: 0 20px 0 20px;

  &:link {
    color: ${theme.lightGray};
  }
  &:visited {
    color: ${theme.lightGray};
  }
  &:hover {
    color: ${theme.mediumGray};
  }
  &:active {
    color: ${theme.lightGray};
  }
`

const WithThemePage = Page.extend`
  background-color: ${theme.darkGray};
  color: ${theme.offWhite};
  text-align: center;
`

const Footer = () => (
  <WithThemePage>
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
      <Content>
        <p>Handcrafted by me © 2017</p>
      </Content>
    </Col>
  </WithThemePage>
)

export default Footer;
