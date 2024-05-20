import React, { useState } from "react";
import Logo from "./components/logo";
import Form from "./components/Form";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";


export default function App(){
  const[items,setItems]= useState([])
  function handleAddItems(item){
    setItems((items=>[...items,item]))
  }
  function handleDeleteItems(id){
   setItems(items=>items.filter(item=>item.id!==id))
  }
  function changePacked(id) {
    setItems((items)=>
    items.map((item)=>
    item.id===id?{ ...item, packed:!item.packed }:item
    ))
    
  }
  function handleClear(){
    if (confirm('Are you sure you want to clear alll items ?')) {
      setItems([])
    } else {
      // Do nothing!
      alert('Thing was not saved to the database.');
    }
    
  }
  return(
    <div className="App">
      <Logo/>
      <Form onAdditems={handleAddItems}/>
      <PackingList items={items} handleClear={handleClear} handleDeleteItems={handleDeleteItems} changePacked={changePacked}/>
      <Stats items={items} />   
    </div>
  )
}
