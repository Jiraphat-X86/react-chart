import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Dashboard({ logout = () => {} }) {
  return (
    <div>
      <p>This is a dashboard views.</p>
      <Link to='settings'>Settings</Link>
      <Outlet />
      <p>Welcome User</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
