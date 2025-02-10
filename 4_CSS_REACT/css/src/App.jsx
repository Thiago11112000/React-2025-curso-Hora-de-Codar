import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './components/MyComponent.css'
import MyComponent from './components/MyComponent'

function App() {
return <div className='App'>
    {/*Css Global */}
  <h1>React com Css</h1>
    {/*Css de componente */}
  <MyComponent/>
  <p> Este parágrafo é do App.jsx</p>
  {/*Inline CSS */}
  <p style={{color:'magenta', padding:"25px", borderTop: "2px solid red"}}> 
    Este elemento foi estilizado de forma inline 
  </p>
  <p style={{color:'magenta', padding:"25px", borderTop: "2px solid red"}}> 
    Este elemento foi estilizado de forma inline 
  </p>
</div>

  
}

export default App
