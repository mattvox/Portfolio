import React from 'react'
import styled from 'styled-components'
import { Col, Image, Button } from 'react-bootstrap'

import {
  Page,
  Content,
  Title,
  Subtitle,
  theme
} from '../components/styled/theme'


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

const Projects = ({ heading, projects, isFetched }) => {
  const renderProjects = projects.map((project) => {
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

  return (
    <WithThemePage>
      <Title>{heading}</Title>
      {renderProjects}
    </WithThemePage>
  )
}

export default Projects;
