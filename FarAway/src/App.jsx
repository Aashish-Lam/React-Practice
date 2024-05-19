import React, { useState } from "react";
function Logo(){
  return(
    <> <h1>
    ✈️ FAR AWAY🏖️
    </h1>
    </> 
  
  )
}
function Form({onAdditems}){
  const[description, setDescription]=useState("")
  const [quantity, setQuantity]=useState(5);


  function handleSubmit(e){
      e.preventDefault();
      if(!description) return;
      const newItem={
        id: Date.now(), description:description , quantity:quantity,packed:false,
      }
      // setDescription("")
      // setQuantity(1)
      onAdditems(newItem)
  }

  return(
    <form className="add-form" onSubmit={handleSubmit}>
       <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
        {Array.from({length:20},(_,i)=>i+1).map((num)=>
          (<option value={num} key={num}>{num}</option>)
        )}
      </select>
          <input type="text" placeholder="Item...." value={description} onChange={(e)=>setDescription(e.target.value)}/>
          <button>Add</button>

    </form>
  )
}

function Stats(){
  return(
    <footer className="stats">
      <em>
        You have X items on your list,
        and ypu already packed X (X%)
      </em>
    </footer>
  )
}

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
  return(
    <div className="App">
      <Logo/>
      <Form onAdditems={handleAddItems}/>
      <PackingList items={items} handleDeleteItems={handleDeleteItems} changePacked={changePacked}/>
      <Stats/>

   
    </div>
  )
}
function PackingList({items,handleDeleteItems,changePacked}){
  return (
    <div className="list">
  <ul >
  {items.map((item)=>(<Item item={item} key={item.id} handleDeleteItems={handleDeleteItems} changePacked={changePacked}/>))}
  </ul>
  </div>
  )
 
}
function Item({item ,handleDeleteItems,changePacked}){
  return(
  
     <li>
      <button>
        <input type="checkbox" value={item.packed} onChange={()=>changePacked(item.id)} />
      </button>
      <span style={item.packed ? {textDecoration:'line-through'}:{} }>
        {item.quantity}{" "}
        {item.description}</span>
      <button onClick={()=>handleDeleteItems(item.id)}>
        ❌
      </button>
      </li> 
    
  )

}