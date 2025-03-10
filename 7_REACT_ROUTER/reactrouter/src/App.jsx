import { useState } from 'react'
import './App.css'

// 1 - config react router

import {BrowserRouter, Routes, Route} from 'react-router-dom'

// components
import Navbar from './components/Navbar'

// pages
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'
import Info from './pages/info'
import Notfound from './pages/Notfound'


function App() {
  return (
   <div className="App">
    <h1> React Router </h1>
    <BrowserRouter>
    {/* 2 - links com react router */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      {/*4 - Rota dinâmica  */}
      <Route path="/products/:id" element={<Product />} />
      {/*6 - Nested route  */}
      <Route path='/products/:id/info' element={<Info />} />
      {/* 7 - No match round  */}
      <Route path="*" element={<Notfound />}/>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App