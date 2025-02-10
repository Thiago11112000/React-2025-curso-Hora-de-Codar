import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './components/MyComponent.css';
import { useState } from 'react';
import MyComponent from './components/MyComponent';

function App() {
  const n = 15;
  const [name] = useState("Matheus");

  return (
    <div className='App'>
      {/* Css Global */}
      <h1>React com Css</h1>
      {/* Css de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>
      {/* Inline CSS */}
      <p style={{ color: 'magenta', padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      <p style={{ color: 'magenta', padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>

      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>Css dinâmico</h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>Css dinâmico</h2>
      <h2 style={name === "Matheus" ? { color: "green", backgroundColor: "#000" } : null}>
        Teste
      </h2>
    </div>
  );
}

export default App;
