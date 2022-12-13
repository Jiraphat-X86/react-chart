import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

function NewList() {
  // const demoModels = gql`
  // query DemoModels {
  //   demoModels {
  //     createdAt
  //     id
  //     publishedAt
  //     slug
  //     subtitle
  //     title
  //     updatedAt
  //   }
  // }
  // `

  // const { loading, error, data } = useQuery(demoModels)
  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error :</p>

  return (
    <h3>รายการข่าวสาร IoT</h3>
  )
}

function Home({ login = () => {} }) {
  let location = useLocation()
  let navigate = useNavigate()

  return (
    <div>
      <p>This is a home views.</p>
      <button onClick={() => {login();navigate('/dashboard')}}>Login</button>
      <NewList />
      {location.state}
    </div>
  )
}

export default Home
