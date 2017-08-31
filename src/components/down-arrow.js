import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const Arrow = styled.div`
  bottom: 50px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 2;

  color: #eee;
  font-size: 4em;
  background: none;
  border: none;

  @media screen and (max-width: 900px) {
    bottom: 44%;
  }

  @media screen and (max-width: 700px) {
    bottom: 40%;
  }

  @media screen and (max-width: 440px) {
    bottom: 26%;
  }
`

const DownArrow = (props) => (
  <Arrow>
    <FontAwesome name='arrow-down' />
  </Arrow>
)

export default DownArrow;
