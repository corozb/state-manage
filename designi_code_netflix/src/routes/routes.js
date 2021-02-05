import { Route, Switch, Redirect } from 'react-router-dom'

import { PrivateRoute, PublicRoute } from './helperRoutes'
import Home from '../Pages/Home'
// import Hello from '../Pages/Hello'
import Public from '../Pages/Public'
import Login from '../Pages/Login'
import Private1 from '../Pages/Private1'
import Private2 from '../Pages/Private2'
import Page404 from '../Pages/Page404'
import { isAuthenticated } from '../data/service/auth/authetication'

const Routes = () => {
  const isAuth = isAuthenticated()

  return (
    <Switch>
      <PublicRoute exact path='/' component={Home} />
      <PublicRoute exact path='/public' component={Public} />
      <PublicRoute exact path='/login' component={Login} />
      <PrivateRoute exact path='/private1' component={Private1} />
      <PrivateRoute exact path='/private2' component={Private2} />
      <Route exact path='/' component={Page404} />
      <Route exact path='*' render={() => <Redirect path='/**' to={isAuth ? '/private1' : '/login'} />} />
    </Switch>
  )
}

export default Routes
