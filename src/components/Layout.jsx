import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import DashBoard from '../Pages/DashBoard'
import Nav from './Nav'

const Layout = () => {
  return (
    <>  
    <Nav/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DashBoard' element={<DashBoard/>}/>
        <Route path='*' element={<h1>No pages</h1>}/>
        </Routes>
    </>
  )
}

export default Layout
