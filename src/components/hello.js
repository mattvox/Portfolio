import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-bootstrap'
import Scroll from 'react-scroll'

import { Title, Subtitle } from './styled/styled'
import DownArrow from './down-arrow'

const Link = Scroll.Link

const Container = styled.div`
  box-sizing: border-box;
  display: block;
  height: 100vh;
  position: relative;
  width: 100%;
  text-align: center;
`

const Background = styled.div`
  position: absolute;
  height: 95%;
  width: 100%;

  background: url(https://images.contentful.com/8tgzv1ffznc9/4VYSzlBxJeWYue2MIa6iyg/123b371175859caf5cf98795f6943fb8/bg_landscape_v2_web.png);
  background-repeat: no-repeat;
  background-position: center bottom;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-color: #F33024;
`

const ColorFix = styled.div`
  box-sizing: border-box;
  display: block;
  height: 6%;
  position: absolute;
  bottom: 0px;
  width: 100%;
  text-align: center;
  z-index: 99;
  background-color: #242B3A;
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  height: 100%;
  width: 100%;
  color: #E6ECEE;
  transform: translateY(-50%);

  @media screen and (min-aspect-ratio: 3/2) {
    top: 35%;
  }
`

const Hello = (props) => (
  <Container>
    <Background>
      <Content>
        <Grid fluid>
          <Row>
            <Col xs={8} xsOffset={2} sm={8} smOffset={2} md={8} mdOffset={2}>
              {props.isFetching ? <div>LOADING!~!!!</div> : <div>
                <Title>{props.greeting}</Title>
                <Subtitle>{props.text}</Subtitle>
            </div>}
            </Col>
          </Row>
        </Grid>
      </Content>
      <Link to={'About'} spy={true} smooth={true}>
        <DownArrow />
      </Link>
    </Background>
    <ColorFix />
  </Container>
)

export default Hello;
