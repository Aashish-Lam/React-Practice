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
    photoName: "momos/buff_momo.jpg",
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

function Momo(props){
  return (
    <>
    <li className='pizza'>
    <img src={props.momoObj.photoName} alt={props.momoObj.name} style={{
      width:102,
      height:102

    }} />
      <div>
    <h3>{props.momoObj.name}</h3>
      <p>{props.momoObj.ingredients}</p>
      <span>{props.momoObj.price-2.5}</span>
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
const Footer=()=>{
  const hours=new Date().getHours()
  const Openhours=10
  const Closehours=20
  const isOpen=hours>Openhours && hours<Closehours
  console.log ("isOpen")
  // if(hours>Openhours && hours<Closehours ) alert("we are currently open")
  //   else{
  // alert("we are currently closed")
  //   }
  return(
    <footer className='footer'>
      {
        new Date().toLocaleDateString()
      }This facality is currently open
    </footer>
  )
}
const Menu=()=>{
  return(
    <>
    <main className="menu">
      <h2>
        Our Menu
      </h2>
      <ul className='pizzas'>
      {momoData.map(momo=>(
      <Momo momoObj={momo} key={momo.name}></Momo>
      ))}

      </ul>
      
    </main>
    </>
  )
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
