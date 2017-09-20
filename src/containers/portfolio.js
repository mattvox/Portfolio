import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import Scroll from 'react-scroll'

import Projects from './projects'
import Landing from '../components/landing'
import About from '../components/about'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Loading from '../components/hocs/is-loading'
import { fetchPageData, fetchAsset } from '../actions/index'


class Portfolio extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchPageData('about'))
    dispatch(fetchPageData('contact'))
    dispatch(fetchPageData('skills'))

    dispatch(fetchAsset())
  }

  renderLanding() {
    const { data, isFetching } = this.props.landing
    const { greeting, text } = data

    return (
      <Landing
        isFetching={isFetching}
        greeting={greeting}
        text={text}
      />
    )
  }

  renderAbout() {
    const { data, isFetching } = this.props.about
    const { heading, description } = data
    const AboutWithLoader = Loading(About)

    return (
      <AboutWithLoader
        isFetching={isFetching}
        heading={heading}
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
        {this.renderLanding()}
        <Grid fluid>
          <Element name='About'>
            {this.renderAbout()}
          </Element>
          <Skills />
          <Projects />
          {this.renderContact()}
          <Footer />
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    landing: state.pageData.landing,
    about: state.pageData.about,
    contact: state.pageData.contact,
  }
}

export default connect(mapStateToProps)(Portfolio);
