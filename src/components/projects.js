import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Col, Image, Button } from 'react-bootstrap'

import { Page, Content, Title, Subtitle } from './styled/styled'

// import { Link } from 'react-router';

import { fetchPageData } from '../actions/index';

const WithColorPage = styled(Page)`
  background-color: #FFF;
`

const StyledSubtitle = styled(Subtitle)`
  padding: 20px 0 0 20px;
`

const StyledButton = styled(Button)`
  margin: 20px 0 0 20px;
  text-align: center;
`

const Tags = styled.div`
  font-size: 1.2em;
  padding: 20px;
  text-transform: uppercase;
  color: #B7CFC3;
`

class Projects extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchPageData('projects'))
  }

  renderProjects() {
    const { data, isFetching } = this.props.projects

    return data.projects.map((project) => {
      const { fields } = project

      return (
        <Content key={fields.title}>
          <Col xs={10} xsOffset={1} md={4} mdOffset={2}>
            <div style={{ padding: '20px' }}>
              <Image responsive rounded src={`https:${fields.image.fields.file.url}`} />
            </div>
          </Col>
          <Col xs={10} xsOffset={1} md={4} mdOffset={0}>
            <Content>
              <StyledSubtitle>{fields.title}</StyledSubtitle>
              <Tags>{fields.tags}</Tags>
            <StyledButton href={fields.github} target='_blank'>
                View on Github
              </StyledButton>
            </Content>
          </Col>
          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
            <Content>
              <p>{fields.description}</p>
            </Content>
          </Col>
        </Content>
      )
    })
  }

  render() {
    console.log('PROJECT PROPS', this.props)
    if (!this.props.projects.data.projects) {
      return <div>loading...</div>
    }

    else {
      return (
        <WithColorPage>
          <Title>{this.props.projects.data.heading}</Title>
          {this.renderProjects()}
        </WithColorPage>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    projects: state.pageData.projects,
  }
}

export default connect(mapStateToProps)(Projects);
