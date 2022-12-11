import React from 'react'
import { useLocation } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

function NewList() {
  const demoModels = gql`
  query DemoModels {
    demoModels {
      createdAt
      id
      publishedAt
      slug
      subtitle
      title
      updatedAt
    }
  }
  `

  const { loading, error, data } = useQuery(demoModels)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>

  console.log(data)

  return (
    <div>
      <h3>รายการข่าวสาร IoT</h3>
    </div>
  )
}

function Home() {
  let location = useLocation()
  return (
    <div>
      <p>This is a home views.</p>
      <NewList />
    </div>
  )
}

export default Home
