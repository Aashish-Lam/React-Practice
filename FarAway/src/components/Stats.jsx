import React from 'react'

export default function Stats({items}){
    if (items.length===0) return <p className="footer stats">Star packing for your  trip 🚀</p>
    const numItems=items.length
   const packed= items.filter(item=>item.packed).length
   const percebtage=(packed/numItems)*100
    return(
  
      <footer className="stats">
      {percebtage===100 ? <em>
        You are all set for the trip
      </em> :  <em>
          You have {numItems} items on your list,
          and you already packed {packed} ({percebtage})%
        </em>  }
       
      </footer>
    )
  }