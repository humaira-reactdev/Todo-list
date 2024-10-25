import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout1 = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>    
    </>
  )
}

export default Layout1