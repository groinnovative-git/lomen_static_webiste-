import React from 'react'
import Navbar from '../includes/Navbar'
import CTA from '../includes/CTA'

const MainLayout = ({children}) => {
  return (
    <div className='mainModule'>
      <CTA />
      <Navbar />
      <div className='layout'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
