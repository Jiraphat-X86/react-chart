import React from 'react'
import { Link } from 'react-router-dom'

function Contract() {
  return (
    <div>
      <p>This is a contract views.</p>
      <Link to='/' state={'From Contract view.'}>Back to Home view.</Link>
    </div>

  )
}

export default Contract
