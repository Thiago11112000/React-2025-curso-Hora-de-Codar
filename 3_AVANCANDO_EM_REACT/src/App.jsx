import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import City from './assets/city.jpg';
function App() {

  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      {/*Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*Imagem em asset */}
    <img src={City} alt="Cidade" />

      <div>

      </div>
</div>
  )
}

export default App
