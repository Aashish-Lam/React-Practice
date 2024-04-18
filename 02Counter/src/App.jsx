import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter]=useState(0)//propogates to user interface
  // let Counter=15
  const addValue= ()=>{
    if(Counter<20){
      Counter=Counter+1;
    }
    else{
      Counter
      
    }
    //mathi ko counter varr 0 ma initialize vayesi addition gareko
    setCounter(Counter)//update counter haru tyo mathiko method ma pass gareko
  }
  //similary decrease the value
  const removeValue= ()=>{
    if(Counter<=0){
      Counter
    }
    else{
      Counter=Counter-1
    }
    
    setCounter(Counter)
  }
  return (
    <>
     <div>
      <h1>Chai aur react</h1>
      <h2>Counter value : {Counter}</h2>
      <button onClick={addValue}>Add value{Counter}</button>
      <br/>
      <br/>
      <button
      onClick={removeValue}>Remove Value{Counter}</button>
     </div>
    </>
  )
}

export default App
