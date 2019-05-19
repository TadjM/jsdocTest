import React from 'react'
import { Link } from 'gatsby'
/**
  * React component to signal the success of the login
  */
const Home = () => (
  <div>
    <h1>Home</h1>
    <p>
      You are now logged in! <Link to='/app/profile'>View profile</Link>
    </p>
  </div>
)

export default Home
