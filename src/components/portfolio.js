import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

// import Slider from 'react-viewport-slider';

import Hello from './hello'
import Skills from './skills'
import About from './about'
import Contact from './contact'
import Footer from './footer'
// import Projects from './projects'
import Loading from './hocs/is-loading'

import { fetchHello } from '../actions/index'



class Portfolio extends Component {
  // componentDidMount() {
  //   this.props.fetchHello();
  // }

  // renderHello() {
  //   if (!this.props.hello) {
  //     return <div>loading...</div>
  //   } else {
  //     return (
  //       <Hello greeting={this.props.hello.greeting}
  //             text={this.props.hello.text} />
  //     )
  //   }
  // }

  renderHello() {
    const WrappedHello = Loading(Hello)

    return (
      <WrappedHello
        // actionThing={this.props.fetchHello()}
        greeting={this.props.hello.greeting}
        text={this.props.hello.text}
      />
    )
  }

  render() {
    return (
      <div>
        <Grid fluid>
          {this.renderHello()}
          <Skills />
          <About />
          <Contact />
        </Grid>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projectsPage.projects,
    hello: state.homePage.hello,
  }
}

export default connect(mapStateToProps, { fetchHello })(Portfolio);
