import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'

// import Meter from 'grommet/components/Meter'

import ProgressBar from 'react-progressbar.js'

import { Page, Title, Content } from './styled/styled'

import '../grommet.min.css'

const WithColorPage = styled(Page)`
  background-color: #E6ECEE;
  /*color: #242B3A;*/
`

const Circle = ProgressBar.Circle

const options = {
  strokeWidth: 4,
  color: '#F33024',
  trailColor: '#f4f4f4',
  text: {
    style: {
      fontSize: '1em',
      color: '#242B3A',
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: 0,
      margin: 0,
      transform: {
        prefix: true,
        value: 'translate(-50%, -50%)'
      },
    }
  },
  svgStyle: {
        display: 'block',
        width: '100%',
        padding: '20px',
    },
  // autoStyleContainer: 'true',
  // alignToBottom: 'true',
}

const Skills = (props) => (
  <WithColorPage>
    <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
      <Title>my current toolbox</Title>
    </Col>
    <Content>
      <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
        <Content>
          <p>
            While I primarily spend most of my time in the Javascript world, lately I've felt a strong pull over to Python and the sheer power it offers when tackling machine learning algorithms and data science.
          </p>
          <p>
            Staying focused on the web I've dipped my toe into Django a bit, but almost always find a way to include React and Redux into every app I write. A dash of functional programming and immutable data structures!? Sign me up, right now!
          </p>
        </Content>
      </Col>
      {/* <Col xs={5} xsOffset={1} sm={2} smOffset={1} md={2} mdOffset={2}>
        <Content>
          <p>Javascript</p>
          <p>Node.js</p>
          <p>React</p>
          <p>HTML5</p>
          <p>CSS3</p>
        </Content>
      </Col>
      <Col xs={5} sm={2} md={1}>
        <Content>
          <p>◼◼◼◼◼◻</p>
          <p>◼◼◼◼◼◻</p>
          <p>◼◼◼◼◼◻</p>
          <p>◼◼◼◼◻◻</p>
          <p>◼◼◼◼◻◻</p>
        </Content>
      </Col> */}

      {/* <Meter type='spiral'
        size='large'
        max={100}
        stacked={false}
        series={[
          {
            "label": "HTML / CSS",
            "value": 90,
            "colorIndex": "graph-3"
          },
          {
            "label": "Javascript",
            "value": 90,
            "colorIndex": "graph-4"
          },
          {
            "label": "Python",
            "value": 75,
            "colorIndex": "graph-1",
          },
          {
            "label": "Elixir",
            "value": 65,
            "colorIndex": "graph-2"
          },
        ]}
        /> */}

      <Col xs={5} xsOffset={1} md={2} mdOffset={2}>
          <Circle
            containerStyle={{ float: 'left' }}
            progress={0.9}
            text='Javascript'
            options={options}
            initialAnimate={true}
          />
      </Col>
      <Col xs={5} xsOffset={0} md={2} mdOffset={0}>
          <Circle
            progress={0.9}
            text='Node.js'
            options={options}
            initialAnimate={true}
          />
      </Col>
      <Col xs={5} xsOffset={1} md={2} mdOffset={0}>
          <Circle
            progress={0.9}
            text='HTML5'
            options={options}
            initialAnimate={true}
          />
      </Col>
      <Col xs={5} xsOffset={0} md={2} mdOffset={0}>
          <Circle
            progress={0.8}
            text='CSS3'
            options={options}
            initialAnimate={true}
          />
      </Col>

      <Col xs={5} xsOffset={1} md={2} mdOffset={2}>
          <Circle
            containerStyle={{ float: 'left' }}
            progress={0.8}
            text='React'
            options={options}
            initialAnimate={true}
          />
      </Col>
      <Col xs={5} xsOffset={0} md={2} mdOffset={0}>
          <Circle
            progress={0.7}
            text='Python'
            options={options}
            initialAnimate={true}
          />
      </Col>
      <Col xs={5} xsOffset={1} md={2} mdOffset={0}>
          <Circle
            progress={0.6}
            text='Django'
            options={options}
            initialAnimate={true}
          />
      </Col>
      <Col xs={5} xsOffset={0} md={2} mdOffset={0}>
          <Circle
            progress={0.7}
            text='Mongo'
            options={options}
            initialAnimate={true}
          />
      </Col>


      <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
        <Content>
          <p>
            To check out my recent open source projects, click on the GitHub icon below.
          </p>
        </Content>
      </Col>

      {/* <Col xs={5} xsOffset={1} sm={2} smOffset={2} mdOffset={1}>
        <Content>
          <p>Python</p>
          <p>Django</p>
          <p>Mongo</p>
          <p>Postgres</p>
        </Content>
      </Col>
      <Col xs={5} sm={2} md={1}>
        <Content>
          <p>◼◼◼◼◻◻</p>
          <p>◼◼◼◻◻◻</p>
          <p>◼◼◼◼◻◻</p>
          <p>◼◼◼◻◻◻</p>
        </Content>
      </Col> */}
    </Content>
  </WithColorPage>
)

export default Skills;
