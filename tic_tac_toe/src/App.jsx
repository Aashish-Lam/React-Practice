import { useState } from 'react'
import './App.css'
function Square() {
  const [value,setValue]=useState(Array(9).fill(null));
  function handleClick(){
    setValue('X')
    console.log('clicked!');
  }
return(

  <button className='square'
  onClick={handleClick}>
   {value}
  </button>
)

  // return <button className="square"></button>;
}

function App() {
  

  return (
    <>
    <div className="container">
      <div className='board-row'>
         <Square ></Square>
         <Square></Square>
         <Square></Square>
      </div>
      <div className='board-row'>
         <Square></Square>
         <Square></Square>
         <Square>    </Square>
      </div>
      <div className='board-row'>
         <Square>    </Square>
         <Square>    </Square>
         <Square>    </Square>
    </div>

    </div>
    </>
  )
}

export default App
