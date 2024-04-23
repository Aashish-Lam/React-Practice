import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
function App() {
  const [length, setLength] = useState(4)
  const[nA, setNA]= useState(false);
  const[charAllowed, setcharAllowed]= useState(false);
  const[password, setPassword]=useState("")
  //ref hooks
  const passowrdRef=useRef(null)
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(nA) str+="0123456789"
    if(charAllowed) str+="!@#$%^&&*()_+"

    for(let i=1;i<=length; i++){
      let char=Math.floor(Math.random()* str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,nA,charAllowed])
  
  useEffect(()=>{
    passwordGenerator();
  },[passwordGenerator])
const cpcb = useCallback(() => {
  navigator.clipboard
    .writeText(password)
    .then(() => {
      passowrdRef.current?.select()
      console.log("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Error copying to clipboard:", err);
    });
}, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passowrdRef}
        />  
       <button onClick={cpcb}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Copy
</button>
        </div>
        <div className='flex text-sm gap-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={4} max={50} value={length}
            className='cursor-pointer '
            onChange={(e)=>{
              setLength(e.target.value)
            }} />
            <label htmlFor=""> Length{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={nA}
              id="numberInput"
              onChange={()=>{
              setNA((prev)=>!prev)
                }
              } />
            </div>
            <label htmlFor="numberInput">Numbers</label>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={charAllowed}
              id="characterInput"
              onChange={()=>{
              setcharAllowed((prev)=>!prev)
                }
              } />
            </div>
            <label htmlFor="characterInput">Charcters</label>
        </div>
        </div>
            
    </>
  )
}

export default App
