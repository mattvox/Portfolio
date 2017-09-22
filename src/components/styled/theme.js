import styled from 'styled-components'
import { Row } from 'react-bootstrap'


export const theme = {
  white: '#ffffff',
  offWhite: '#e7eff2',
  lightGray: '#e6ecee',
  lightBlue: '#9bd2db',
  mediumBlue: '#53c3c3',
  mediumGray: '#67737b',
  darkGray: '#232b3a',
}

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

export const Subtitle = styled.h1`
  font-size: 2em;
  font-weight: bold;
`

export const Content = styled.div`
  .add-padding {
    padding: 20px;
  }

  h1, h2, h3 {
    padding: 20px 0 0 20px;
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
  }

  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }

  h3 {
    font-size: 1.2em;
    text-transform: uppercase;
    color: ${theme.mediumBlue};
  }

  p {
    font-size: 1.5em;
    font-weight: normal;
    padding: 20px;
  }

  ul {
    margin: 0;
    padding: 0 0 20px 0;
  }

  li {
    font-size: 1.2em;
    list-style-type: none;
    margin: 0;
    padding: 20px 0 0 0;
  }

  img {
    width: 100%;
    height: auto;
  }
`
