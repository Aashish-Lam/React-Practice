import { useState } from 'react'
import './index.css'

//momo object start
const momoData = [
  {
    name: "Veg Momo",
    ingredients: "Cabbage, carrot, onion, ginger, garlic",
    price: 5,
    photoName: "../public/Veg_Momo.png",
    soldOut: false,
  },
  {
    name: "Chicken Momo",
    ingredients: "Chicken, onion, ginger, garlic, spices",
    price: 7,
    photoName: "../public/Chicken_Momo.png",
    soldOut: false,
  },
  {
    name: "Pork Momo",
    ingredients: "Pork, onion, ginger, garlic, spices",
    price: 8,
    photoName: "../public/Pork_Momo.png",
    soldOut: false,
  },
  {
    name: "Buff Momo",
    ingredients: "Buffalo meat, onion, ginger, garlic, spices",
    price: 9,
    photoName: "../public/Buff_Momo.jpeg",
    soldOut: true,
  },
  {
    name: "Paneer Momo",
    ingredients: "Paneer cheese, onion, ginger, garlic, spices",
    price: 6,
    photoName: "../public/Paneer_Momo.png",
    soldOut: false,
  },
  {
    name: "Cheese Momo",
    ingredients: "Mozzarella cheese, onion, ginger, garlic, spices",
    price: 7,
    photoName: "momos/cheese_momo.jpg",
    soldOut: false,
  },
];

function Momo({momoObj}){
  // if(momoObj.soldOut) return <> null </>;
  return (
    <>
    <li className={`pizza ${momoObj.soldOut ? 'sold-out':''}`}>
    <img src={momoObj.photoName} alt={momoObj.name} style={{
      width:102,
      height:102

    }} />
      <div>
    <h3>{momoObj.name}</h3>
      <p>{momoObj.ingredients}</p>
      {momoObj.soldOut ? (
        <span>
          Sold Out
        </span>
      ):(<span> {momoObj.price}</span>)
     }
    </div>
  </li>
    </>
  )
}
const Header=()=>{
  const style={color:"red",fontSize:"32px", textTransform:"uppercase"}
return(
  <h1 className='header'>
    Mitho Momos React
  </h1>
)
}
const Menu=()=>{
  const momos= momoData
  const numMomos= momos.length;
  return(
    
    <>
    <main className="menu">
      <h2>
        Our Menu
      </h2>
     
      {numMomos > 0 ? 
     <ul className='pizzas'>
      {momoData.map(momo=>(
      <Momo momoObj={momo} key={momo.name}></Momo>
      ))}
      </ul>
           :(<>
           <p>
            We are still figuring out our menu. Please comeback later:
           </p>
           
           </>) }
      
    </main>
    </>
  )
}
const Footer=()=>{
  const hours=new Date().getHours()
  const Openhours=10
  const Closehours=23
  const isOpen= hours>=Openhours && hours<=Closehours
   if  (!isOpen){
    return(
      <>
      We are not open 😔😔
      </>

    )
   }


  return isOpen ? (
  <Orders Hours={hours} Closehours={Closehours}/>
  ) :<>
    <footer className='order'>
      The facility is currently closed
    </footer>
  </>
}
function Orders(params){
  return (
  <div className='order'>
  <p>
  {params.Hours} This facility is currently open until {params.Closehours}
  </p>
  </div>)
}
function App() {
  return (
  
  <>
  <div className='container'>
    <Header/>
    <Menu/>
    <Footer/>
    </div>
    </>
  )
}

export default App
