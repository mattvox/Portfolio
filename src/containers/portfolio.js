import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import Scroll from 'react-scroll'

import Landing from '../components/landing'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Loading from '../components/hocs/is-loading'
import { fetchPageData } from '../actions/index'


class Portfolio extends Component {
  componentWillMount() {
    const { dispatch } = this.props

    dispatch(fetchPageData('about'))
    dispatch(fetchPageData('contact'))
    dispatch(fetchPageData('skills'))
    dispatch(fetchPageData('projects'))
  }

  renderLanding() {
    const { data, isFetched } = this.props.landing
    const { greeting, text } = data

    return (
      <Landing
        isFetched={isFetched}
        greeting={greeting}
        text={text}
      />
    )
  }

  renderAbout() {
    const { data, isFetched } = this.props.about
    const { heading, description } = data
    const AboutWithLoader = Loading(About)

    // provides a scroll anchor target from
    // react-scroll
    const Element = Scroll.Element

    return (
      <Element name='About'>
        <AboutWithLoader
          isFetched={isFetched}
          heading={heading}
          description={description}
        />
      </Element>
    )
  }

  renderSkills() {
    const { data, isFetched } = this.props.skills
    const { skills, heading, description } = data
    const SkillsWithLoader = Loading(Skills)

    return (
      <SkillsWithLoader
        isFetched={isFetched}
        heading={heading}
        description={description}
        skills={skills}
      />
    )
  }

  renderProjects() {
    const { data, isFetched } = this.props.projects
    const { projects, heading } = data
    const ProjectsWithLoader = Loading(Projects)

    return (
      <ProjectsWithLoader
        isFetched={isFetched}
        heading={heading}
        projects={projects}
      />
    )
  }

  renderContact() {
    const { data, isFetched } = this.props.contact
    const { heading, description } = data
    const ContactWithLoader = Loading(Contact)

    return (
      <ContactWithLoader
        isFetched={isFetched}
        heading={heading}
        description={description}
      />
    )
  }

  render() {
    return (
      <div>
        {this.renderLanding()}
        <Grid fluid>
          {this.renderAbout()}
          {this.renderSkills()}
          {this.renderProjects()}
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
    skills: state.pageData.skills,
    projects: state.pageData.projects,
  }
}

export default connect(mapStateToProps)(Portfolio);
