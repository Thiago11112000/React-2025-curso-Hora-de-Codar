// components

import FirstComponent from './components/FirstComponent'




// styles // css
import { useState } from 'react'
import './App.css'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> FUNDAMENTOS React</h1>
      <FirstComponent/>
      <TemplateExpressions />
      <MyComponent />
      <Events/>
    </>
  )
}

export default App
