import React from 'react'
import Navbar from '../includes/Navbar'

const MainLayout = ({children}) => {
  return (
    <div className='mainModule'>
      <Navbar />
      <div className='layout'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
