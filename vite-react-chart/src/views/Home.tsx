import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {

  let location = useLocation()

  return (
    <div>This is a home views.</div>
  )
}

export default Home
