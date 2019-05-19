
import React from 'react'
import { Link } from 'gatsby'
import { getCurrentUser } from '../utils/auth'
/**
 * react Component to display the user  profile
 * @return {undefined} User - The user profile containing email, phone_number and unsername is returned
 */
const Home = () => {
  const user = getCurrentUser()
  console.log('user:', user)
  return (
    <div>
      <h1>Profile Details</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone_number}</p>
      <p>Username: {user.username}</p>
      <Link to='/app/home'>Home</Link>
    </div>
  )
}

export default Home
