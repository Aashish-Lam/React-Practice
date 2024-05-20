import React, { useState } from "react";
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
export default Form
