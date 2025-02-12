import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Myform from './Components/Myform';

function App() {
  return (
    <div>
      <h2>Forms</h2>
      <Myform user={{ name: "Josias", email: "josias@gmail.com" }} />
    </div>
  );
}

export default App;