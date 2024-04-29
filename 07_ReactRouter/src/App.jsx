import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footers from './components/footers/Footers'
import Header from './components/headers/Headers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Footers></Footers>
    </>
  )
}

export default App
