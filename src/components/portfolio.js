import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'react-viewport-slider';


export default class Portfolio extends Component {
  componentDidMount() {
    // fetch all the required data from contentful
  }

  render() {
    return (
      <Slider>
        <div itemStyle={{ backgroundColor: '#a2d7c7' }}>
          <div className="content">This is where hello.js goes.</div>
        </div>
        <div itemStyle={{ backgroundColor: '#353330' }}>
          <div className="content">This is where skills.js goes.</div>
        </div>
        <div itemStyle={{ backgroundColor: '#c2d9c7' }}>
          <div className="content">This is where projects.js goes.</div>
        </div>
        <div itemStyle={{ backgroundColor: '#84ebee' }}>
          <div className="content">This is where about.js goes</div>
        </div>
        <div itemStyle={{ backgroundColor: '#dc90de' }}>
          <div className="content">This is where contact or footer goes</div>
        </div>
      </Slider>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
  }
}

// export default connect(mapStateToProps, { fetchProjects })(Portfolio);
