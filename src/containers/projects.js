import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Col, Image, Button } from 'react-bootstrap'
// import { Link } from 'react-router';

import {
  Page,
  Content,
  Title,
  Subtitle,
  theme
} from '../components/styled/theme'

import { fetchPageData } from '../actions/index'


const WithThemePage = Page.extend`
  background-color: ${theme.white};
  color: ${theme.darkGray};
`

const StyledSubtitle = Subtitle.extend`
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
  color: ${theme.mediumBlue};
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
            <p>
              <Image responsive rounded src={`https:${fields.image.fields.file.url}`} />
            </p>
          </Col>
          <Col xs={10} xsOffset={1} md={4} mdOffset={0}>
              <StyledSubtitle>{fields.title}</StyledSubtitle>
              <Tags>{fields.tags}</Tags>
              <StyledButton href={fields.github} target='_blank'>
                View on Github
              </StyledButton>
          </Col>
          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
              <p>{fields.description}</p>
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
        <WithThemePage>
          <Title>{this.props.projects.data.heading}</Title>
          {this.renderProjects()}
        </WithThemePage>
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
