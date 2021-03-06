/**
 * Main application page where differents components and code are routed
 * and link to the corresponding components.
 */
import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Details from '../components/Details'
import Home from '../components/Home'
import Map from '../components/Map'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import PrivateRoute from '../components/PrivateRoute'

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path='/app/home' component={Home} />
      <PrivateRoute path='/app/profile' component={Details} />
      <PrivateRoute path='/app/map' component={Map} />
      <Login path='/app/login' />
      <SignUp path='/app/signup' />
    </Router>
  </Layout>
)

export default App
