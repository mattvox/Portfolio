import React, { Component } from 'react'

export default function(ComposedComponent) {

  class Loading extends Component {
    render() {
      console.log('loading...')
      const loader = <div>Loading...</div>

      return this.props.isFetching ? loader : <ComposedComponent {...this.props} />
    }
  }

  return Loading
}
