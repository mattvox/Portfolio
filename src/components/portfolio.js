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

import { fetchHello } from '../actions/index'



class Portfolio extends Component {
  componentDidMount() {
    // fetch all the required data from contentful
  }

  render() {
    return (
      // <Slider>
      //
      // </Slider>
      <div>
        <Grid fluid>
          <Hello
            greeting={this.props.hello.greeting}
            text={this.props.hello.text}
          />
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
    projects: state.projects.projects,
    hello: state.hello,
  }
}

export default connect(mapStateToProps, { fetchHello })(Portfolio);
