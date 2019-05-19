import React from 'react'
import { navigate } from '@reach/router'
import { isLoggedIn } from '../utils/auth'

/**
 * @summary React component to handle diffirent routes
 * @return {undefined}
 */

class PrivateRoute extends React.Component {
  render () {
    const { component: Component, location, ...rest } = this.props
    if (!isLoggedIn()) {
      navigate(`/app/login`)
      return null
    }
    return <Component {...rest} />
  }
}

export default PrivateRoute
