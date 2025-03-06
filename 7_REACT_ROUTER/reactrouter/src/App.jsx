import { useState } from 'react'
import './App.css'

// 1 - config react router

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'


function App() {
  return (
   <div className="App">
    <h1> React Router </h1>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
