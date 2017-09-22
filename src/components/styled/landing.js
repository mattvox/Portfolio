import styled from 'styled-components'


// styling for the landing component only
// app-wide, reusable styles are found in theme.js

export const Container = styled.div`
  box-sizing: border-box;
  display: block;
  height: 100vh;
  position: relative;
  width: 100%;
  text-align: center;
`

export const Background = styled.div`
  position: absolute;
  height: 95%;
  width: 100%;

  background:
  url(https://images.contentful.com/8tgzv1ffznc9/4XoG6GvOMEKIwG6IaWq8Wy/38ace0792e1356f0f6c05c92788f1e75/bg_landscape_768_web.png);
  background-repeat: no-repeat;
  background-position: center bottom;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-color: #53C3C3;

  @media screen and (min-width: 769px) {
    background:
    url(https://images.contentful.com/8tgzv1ffznc9/5bMD4QQb1CCossOiYWESs/7e55d4683b27c75d606b09c4f7d3f7b0/bg_landscape_1280_wide_web.png);
    background-repeat: no-repeat;
    background-position: center bottom;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-color: #53C3C3;
  }
`

// creates a small, styled div to eliminate
// random ugly horizontal lines between the landing section
// and the section immediately below it
export const ColorFix = styled.div`
  box-sizing: border-box;
  display: block;
  height: 6%;
  position: absolute;
  bottom: 0px;
  width: 100%;
  text-align: center;
  z-index: 99;
  background-color: #242B3A;
`

export const Content = styled.div`
  position: absolute;
  top: 60%;
  height: 100%;
  width: 100%;
  color: #F3FBF6;
  transform: translateY(-50%);

  @media screen and (min-aspect-ratio: 3/2), screen and (max-width: 440px) {
    top: 50%;
  }
`
