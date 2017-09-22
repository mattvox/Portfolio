import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Col } from 'react-bootstrap'
import { Page, Title, Content, theme } from './styled/theme'


const WithThemePage = Page.extend`
  background-color: ${theme.lightGray};
  color: ${theme.darkGray};
`

const ListHeading = styled.div`
  font-size: 1.2em;
  text-transform: uppercase;
  color: ${theme.mediumBlue};
  padding: 0 0 10px 4px;

  @media screen and (max-width: 375px) {
    font-size: 1em;
  }
`

const StyledMarkdown = styled(ReactMarkdown)`
  li {
    color: ${theme.white};
    background-color: ${theme.mediumBlue};
    margin-bottom: 10px;
    padding-left: 10px;

    @media screen and (max-width: 375px) {
      font-size: 1em;
    }
  }
`

const Skills = ({ heading, description, skills, isFetched }) => {
  const renderSkills = skills.map((skill) => {
    const { fields } = skill

    return (
      <Col xs={6} sm={3} md={3} key={fields.title}>
        <ListHeading>{fields.heading}</ListHeading>
      <StyledMarkdown source={fields.skills} />
      </Col>
    )
  })

  return (
    <WithThemePage>
     <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
       <Title>{heading}</Title>
       <Content>
         <ReactMarkdown source={description} />
         {renderSkills}
       </Content>
     </Col>
   </WithThemePage>
  )
}

export default Skills;
