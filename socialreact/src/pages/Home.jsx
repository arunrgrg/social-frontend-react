import React from 'react'
import Header from '../components/Header'
import Content from './Content'

function Home() {
  return (

    <div>
      <Header/>
      <div className="homeContainer">
      <Content/>
      </div>
    </div>
  )
}

export default Home