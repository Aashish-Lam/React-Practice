import React, { useState } from 'react'
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step,setStep]=useState(1)
  function decrease(value){
  if(step>1)
    setStep(step-1)
}
function incrase(value){
  if(step<3)
    setStep((s)=>s+1)
  
}
const[isOpen,setisOpen]=useState(true)

  return (<>
     <button className='close' onClick={()=>{
      setisOpen(!isOpen)
     }}>
        &times;
        </button>
    {
      isOpen ? 
      
      <div className='steps '>
     
      <div
      className='numbers'>
        <div className={step>=1 ? "active":""}>1</div>
        <div className={step>=2 ? "active":""} >2</div>
        <div className={step>=3 ? "active":""}>3</div>
      </div>
     
      <p className="message">{step}:{messages[step-1]}</p>
      
      <p className='buttons'>
        <button style={{backgroundColor:"#7950f2", color:"white"}} onClick={decrease} >
          Previous
          
        </button>
        <button style={{backgroundColor:"#7950f2", color:"white"}} onClick={incrase} 
        >  
          Next
        </button>
      </p>
    </div>:("")
}
    </>
  )
}
