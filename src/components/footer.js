import React from 'react';
import { Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'

const Container = styled.section`
  background-color: #F33024;
`

const Icon = styled.a`
  font-size: 4em;
  color: #E6ECEE;
  text-align: center;
  padding: 20px 0 0 0;

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

const style = {
  paddingLeft: '10px',
  paddingRight: '10px',
}

const Footer = () => (
    <Container>
      <Row>
        <Col xs={8} xsOffset={2} style={{ textAlign: 'center' }}>
          <Icon href="https://www.github.com/mattvox" target="_blank">
            {/* <a href="https://www.github.com/mattvox"> */}
              <FontAwesome className='icon' name='github' style={style} />
            {/* </a> */}
          </Icon>
          <Icon href="mailto:mattbliffert@icloud.com">
            <FontAwesome name='envelope' style={style} />
          </Icon>
          <Icon href="https://www.linkedin.com/in/mbliffert" target="_blank">
            <FontAwesome name='linkedin' style={style} />
          </Icon>
        </Col>
        <Col xs={8} xsOffset={2}>
          <Copyright>
            © 2017 handcrafted by me
          </Copyright>
        </Col>
      </Row>
    </Container>
)

export default Footer;
