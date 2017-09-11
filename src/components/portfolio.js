import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import Scroll from 'react-scroll'

import Hello from './hello'
import About from './about'
import Skills from './skills'
// import Projects from './projects'
import Contact from './contact'
import Footer from './footer'

import Loading from './hocs/is-loading'
import { fetchPageData, fetchProjects } from '../actions/index'


class Portfolio extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchProjects())

    dispatch(fetchPageData('about'))
    dispatch(fetchPageData('contact'))
    dispatch(fetchPageData('skills'))
    // dispatch(fetchPageData('projectsList'))
  }

  renderHello() {
    const { data, isFetching } = this.props.hello
    const { greeting, text } = data

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
    console.log('rendered About')

    return (
      <AboutWithLoader
        isFetching={isFetching}
        title={title}
        description={description}
      />
    )
  }

  renderContact() {
    const { data, isFetching } = this.props.contact
    const { heading, description } = data
    const ContactWithLoader = Loading(Contact)

    return (
      <ContactWithLoader
        isFetching={isFetching}
        heading={heading}
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
          {this.renderContact()}
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
    contact: state.pageData.contact,
  }
}

export default connect(mapStateToProps)(Portfolio);
