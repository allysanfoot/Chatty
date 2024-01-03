import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatPanel from '../components/ChatPanel'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar />
        <ChatPanel />
      </div>
    </div>
  )
}

export default Home