import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Scroll from 'react-scroll'

import DownArrow from './down-arrow'

const Link = Scroll.Link

const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  position: relative;
  width: 100%;
  text-align: center;
`

const Content = styled.div`
  position: absolute;
  top: 30%;
  width: 100%;
  color: #E6ECEE;
  transform: translateY(-50%);

  @media screen and (min-aspect-ratio: 3/2) {
    top: 15%;
  }
`

const Hello = (props) => (
  <Container>
    <Content>
      <Row>
        <Col xs={8} xsOffset={2} sm={8} smOffset={2} md={8} mdOffset={2}>
          <div>
            <p className='page-title'>{props.greeting}</p>
            <h2>{props.text}</h2>
          </div>
        </Col>
      </Row>
    </Content>
    <Link to={'About'} spy={true} smooth={true}>
      <DownArrow />
    </Link>
</Container>
)

export default Hello;
