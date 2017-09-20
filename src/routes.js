import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Portfolio from './containers/portfolio'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Portfolio} />
  </Route>
)
