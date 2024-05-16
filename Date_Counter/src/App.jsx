import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(0)
  function step_increase(){
    setStep((s)=>s+1)
  }
  function step_decrease(){
    setStep((s)=>{
      if (s>0)
      {
        return s-1
      }
      return 0
    })  
  }
  function countincrease (){
    setCount((s)=> {
      return s+step})
  }
  function countdecrease(){
    setCount((s)=>{
        return s-step
      
    })
  
  }
  const date= new Date(" march 21 2021")
  date.setDate(date.getDate()+count);
  
  return (
 <>
  <p>
  Step
 </p>
 <button onClick={step_decrease}>
  -
 </button>

 {step}
 <button onClick={step_increase}>
  +
 </button>
 <div>
 <p>
  Count
 </p>
 <button onClick={countdecrease}>
  -
 </button>
{count}
 <button onClick={countincrease}>
  +
 </button>
 </div>

 <p>
  <span>
    {count===0 ? "today is ": count>0 ? `${count} days from today is `:`${count} days ago was `}
  </span>
  {date.toLocaleString()}
 </p>
 </>
  )
}

export default App
