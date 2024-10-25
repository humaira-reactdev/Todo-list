import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout1 from './Layouts/Layout1'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'

function App() {
  const route=createBrowserRouter(
    createRoutesFromElements(  
    <Route>
      <Route path='/' element={<Layout1/>}> 
       <Route index element = {<HomePage/>}/>      
      </Route>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
   </Route>

    ))

  

  return (
    <>
        <RouterProvider router={route}/>        
    </>
  )
}

export default App
