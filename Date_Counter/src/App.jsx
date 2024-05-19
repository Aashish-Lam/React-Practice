import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
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
  function handleReset(){
    setStep(step > 1 ? 1 : step);
    setCount(count !== 0 ? 0 : count);
  }

  return (
 <>
 <input type="range" min="1" max="10" value={step} onChange={e=>setStep(Number(e.target.value))}/>
  <p>
  {step}
 </p>

 <div>
 <p>
  Count
 </p>
 <button onClick={countdecrease}>
  -
 </button>
    <input type="text" value={count} onChange={e=>setCount(Number(e.target.value))}/>
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
 {count!==0 || step!==1?
  <div >
<button className='button' onClick={handleReset}>
  Reset
</button>
</div>:<></>
}
 </>
  )
}

export default App
