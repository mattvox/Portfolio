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



export default class Portfolio extends Component {
  componentDidMount() {
    // fetch all the required data from contentful
  }

  render() {
    return (
      // <Slider>
      //
      // </Slider>
      <div>
        <Grid>
          <div>
            <div className="content">
              <Hello greeting='Hello,' text='my name is Matt, a full stack developer living in the Philadelphia area.' />
            </div>
          </div>

          <div>
            <div className="content">
              <Skills />
            </div>
          </div>

          <div>
            <div className="content">
              <About />
            </div>
          </div>

          <div>
            <div className="content">
              <Contact />
            </div>
          </div>



        </Grid>
        <Footer />
</div>

    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
  }
}

// export default connect(mapStateToProps, { fetchProjects })(Portfolio);
