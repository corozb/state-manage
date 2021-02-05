import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../data/service/auth/authetication'

/**
 * Create a public route
 * @param {component, ...options} param0
 */
export const PublicRoute = ({ component, ...options }) => {
  const isAuth = isAuthenticated()

  if (!isAuth) return <Route {...options} component={component} />
  return <Redirect to='/private1' />
}

/**
 * Create a public route
 * @param {component, ...options} param0
 */
export const PrivateRoute = ({ component, ...options }) => {
  const isAuth = isAuthenticated()

  if (isAuth) return <Route {...options} component={component} />
  return <Redirect to='/login' />
}
