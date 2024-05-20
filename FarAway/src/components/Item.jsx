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
  export default Item