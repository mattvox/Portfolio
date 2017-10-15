import React from 'react'
import styled from 'styled-components'
import { Col, Image, Button } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

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
  padding: 0 0 0 20px;
  margin: 10px 0 0 0;
`

const StyledButton = styled(Button)`
  margin: 0 0 0 20px;
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
    const { title, tags, github, linkUrl, description, image } = fields
    const { url: imageUrl } = image.fields.file

    return (
      <Content key={fields.title}>
        <Col xs={10} xsOffset={1} md={4} mdOffset={2}>
          <Image responsive src={`https:${imageUrl}`} />
        </Col>
        <Col xs={10} xsOffset={1} md={4} mdOffset={0}>
          <StyledSubtitle>{title}</StyledSubtitle>
          <Tags>{tags}</Tags>
          {github && <StyledButton href={github} target='_blank'>
            View on Github
          </StyledButton>}
          {linkUrl && <StyledButton href={linkUrl} target='_blank'>
            View Website
          </StyledButton>}
        </Col>
        <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
          <Content>
            <ReactMarkdown source={description} />
          </Content>
        </Col>
      </Content>
    )
  })

  return (
    <WithThemePage>
      <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
        <Title>{heading}</Title>
      </Col>
      {renderProjects}
    </WithThemePage>
  )
}

export default Projects;
