import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [Color, setColor] = useState("teal")

  return (
    //onclick takes the function so we write callback and inside it other functions
  <>
  <div className="h-screen w-full duration-500"
    style={{
      backgroundColor:Color
    }}>
    <div className='fixed flex flex-wrap
    justify-center bottom-14 inset-x-0'>
    <div className='flex flex-wrap
    justify-center px-2 py-1 gap-3 shadow-lg rounded-md  bg-slate-200'>
       <button 
       onClick={()=>{
        setColor("yellow")
       }}className="border-2 border-yellow-900 rounded-lg px-3 py-2 text-yellow-900 cursor-pointer hover:bg-yellow-200 hover:text-neon-200">
          Save changes
        </button>
        <button 
        onClick={()=>{
          setColor("black")
         }}
        className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-black-100 cursor-pointer  hover:bg-black hover:text-yellow-200">
          Save changes
        </button>
        <button  onClick={()=>{
          setColor('rgb(37 99 235)')
         }} class="border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200">
          Save changes
        </button>
    </div>
    </div>
  </div>
  </>
  )
}

export default App
