import React from 'react'
import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import ListPage from './pages/ListPage'
function App() {
  return (
    <div className='w-screen min-h-screen flex flex-col fontInter overflow-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/listpage' element={<ListPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
