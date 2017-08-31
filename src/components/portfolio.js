import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import Scroll from 'react-scroll'
import styled from 'styled-components'

import Hello from './hello'
import About from './about'
import Skills from './skills'
// import Projects from './projects'
import Contact from './contact'
import Footer from './footer'

import Loading from './hocs/is-loading'
import { fetchPageData } from '../actions/index'

// Hex values:
// Orange - D45D3C
// Dark gray - 3F4549
// Medium gray - 67727A
// Light gray - ACB8BC
// Lightest gray - E6ECEE

const HomePage = styled.div`
  background: url(https://images.contentful.com/8tgzv1ffznc9/4VYSzlBxJeWYue2MIa6iyg/123b371175859caf5cf98795f6943fb8/bg_landscape_v2_web.png);
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
`

class Portfolio extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPageData('hello'))
    // dispatch(fetchPageData('about'))
    // dispatch(fetchPageData('skills'))
  }

  renderHello() {
    const { data, isFetching } = this.props.hello
    const { greeting, text } = data
    const HelloWithLoader = Loading(Hello)

    return (
      <Grid fluid>
        <HelloWithLoader
          isFetching={isFetching}
          greeting={greeting}
          text={text}
        />
      </Grid>
    )
  }

  renderAbout() {
    const { data, isFetching } = this.props.about
    const { title, description } = data
    const AboutWithLoader = Loading(About)

    return (
      <AboutWithLoader
        isFetching={isFetching}
        title={title}
        description={description}
      />
    )
  }

  render() {
    const Element = Scroll.Element

    return (
      <div>
        <HomePage>
          {this.renderHello()}
        </HomePage>
        <Grid fluid>
          <Element name='About'>
            {this.renderAbout()}
          </Element>
          <Skills />
          <Footer />
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projectsPage.projects,
    hello: state.pageData.hello,
    about: state.pageData.about,
  }
}

export default connect(mapStateToProps)(Portfolio);
