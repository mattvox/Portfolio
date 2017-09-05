import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import Scroll from 'react-scroll'

import Hello from './hello'
import About from './about'
import Skills from './skills'
// import Projects from './projects'
// import Contact from './contact'
import Footer from './footer'

import Loading from './hocs/is-loading'
import { fetchPageData, fetchProjects } from '../actions/index'


class Portfolio extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPageData('hello'))
    dispatch(fetchProjects())
    console.log(this.props)
    dispatch(fetchPageData('about'))
    // dispatch(fetchPageData('skills'))
  }

  renderHello() {
    const { data, isFetching } = this.props.hello
    const { greeting, text } = data
    const HelloWithLoader = Loading(Hello)

    return (
      <Hello
        isFetching={isFetching}
        greeting={greeting}
        text={text}
      />
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
        {this.renderHello()}
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
