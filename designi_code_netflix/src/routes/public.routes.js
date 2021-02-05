import { Route, Switch, Redirect } from 'react-router-dom'

import { PublicRoute } from './helperRoutes'
import Home from '../Pages/Home'
// import Hello from '../Pages/Hello'
import Public from '../Pages/Public'
import Login from '../Pages/Login'

const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path='/' component={Home} />
      <PublicRoute exact path='/public' component={Public} />
      <PublicRoute exact path='/login' component={Login} />
      <Route exact path='*' render={() => <Redirect path='/**' to='/login' />} />
    </Switch>
  )
}

export default PublicRoutes
