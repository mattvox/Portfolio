import React, { Component } from 'react'


// higher order component which provides
// a loader/spinner before data is loaded
// from the API
export default function(ComposedComponent) {
  class Loading extends Component {
    render() {
      const { isFetched } = this.props
      const loader = <div>Loading...</div>

      return (
        isFetched ? <ComposedComponent {...this.props} /> : loader
      )
    }
  }

  return Loading
}
