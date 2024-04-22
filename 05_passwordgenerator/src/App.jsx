import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(4)
  const[nA, setNA]= useState(false);
  const[charAllowed, setcharAllowed]= useState(false);
  const[password, setPassword]=useState("")
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(nA) str+"0123456789"
    if(charAllowed) str+"!@#$%^&&*()_+}{"
  },[[length,nA,charAllowed, setPassword]])
    for(let i=1;i<=str.length; i++){
      let char=Math.floor(Math.random()* str.length+1)
      
    }
  return (
    <>
    <h1 className=' text-4xl stext-center'>Password Generator</h1>

    </>
  )
}

export default App
