import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { PrivateRoute } from './helperRoutes'
import Private1 from '../Pages/Private1'
import Private2 from '../Pages/Private2'
import Page404 from '../Pages/Page404'

/**
 Return Private PrivateRoutes
 [These routes have to have a valid token] 
 @param {any} props
 */

const PrivateRoutes = () => {
  return (
    <Switch>
      <PrivateRoute exact path='/private1' component={Private1} />
      <PrivateRoute exact path='/private2' component={Private2} />
      <PrivateRoute exact path='/404' component={Page404} />

      {/* tow versions: */}
      {/* <Route exact path='*' component={Page404} /> */}
      <Route exact path='*' render={() => <Redirect to='/404' />} />
    </Switch>
  )
}

export default PrivateRoutes
