import React, { Component } from 'react'

export default function(ComposedComponent) {

  class Loading extends Component {

    constructor(props) {
      super(props)

      this.state = {
        loading: true,
      }
    }

    componentDidMount() {
      console.log('Loaded HOC')
      if (this.state.loading = true) {
        this.props.actionThing
          .then(this.setState({loading: false}), console.log('API CALL!'))
      }
    }

    render() {
      const loader = <div>Loading...</div>

      return this.state.loading ? loader : <ComposedComponent {...this.props} />
    }
  }

  return Loading
}
