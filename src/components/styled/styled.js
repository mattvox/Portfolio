import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Row } from 'react-bootstrap'


export const Page = styled(Row)`
  padding-top: 60px;
  padding-bottom: 60px;
`

export const Title = styled.h1`
  font-size: 4.5em;
  font-weight: bold;
  letter-spacing: -1px;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 60px;
  text-align: center;
`

export const Subtitle = styled.h2`
  font-size: 2em;
  font-weight: bold;
  letter-spacing: -1px;
`

export const Content = styled.div`
  &>p {
    font-size: 1.5em;
    font-weight: normal;
    padding: 20px;
  }
`

export const StyledMarkdown = styled(ReactMarkdown)`
  &>p {
    font-size: 1.5em;
    font-weight: normal;
    padding: 20px;
  }
`
