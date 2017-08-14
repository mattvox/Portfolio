import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchProjects } from '../actions/index';

class Projects extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return <div>Projects component loaded...</div>
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
  }
}

export default connect(mapStateToProps, { fetchProjects })(Projects);
