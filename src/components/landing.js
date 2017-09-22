import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Scroll from 'react-scroll'
import DownArrow from './down-arrow'
import { Title, Subtitle } from './styled/theme'
import { Container, Background, ColorFix, Content } from './styled/landing'

// in-page scroll link from react-scroll
const AnchorLink = Scroll.Link

const Greeting = Title.extend`
  padding-bottom: 20px;
`

const Landing = (props) => (
  <Container>
    <Background>
      <Content>
        <Grid fluid>
          <Row>
            <Col xs={8} xsOffset={2}>
              <Greeting>{props.greeting}</Greeting>
              <Subtitle>{props.text}</Subtitle>
            </Col>
          </Row>
        </Grid>
      </Content>
      <AnchorLink to={'About'} spy={true} smooth={true}>
        <DownArrow />
      </AnchorLink>
    </Background>
    <ColorFix />
  </Container>
)

export default Landing;
