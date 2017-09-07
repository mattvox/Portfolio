import React, { Component } from 'react'

export default function(ComposedComponent) {

  class Loading extends Component {
    render() {
      const { isFetching } = this.props
      const loader = <div>Loading...</div>

      return (
        isFetching ? loader : <ComposedComponent {...this.props} />
      )
    }
  }

  return Loading
}
