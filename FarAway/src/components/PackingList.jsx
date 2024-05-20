import React, { useState } from "react";
import Item from "./Item";
function PackingList({ items, handleDeleteItems, changePacked,handleClear }) {
    const [sortBy, setSortBy] = useState('input');
    let sortedItems;
  
    if (sortBy === 'input') sortedItems = items;
    if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              handleDeleteItems={handleDeleteItems}
              changePacked={changePacked}
            />
          ))}
        </ul>
        <div>
          <select
            name=""
            id=""
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="input">Sort by Input</option>
            <option value="description">Sort by Description</option>
            <option value="packed">Sort by Packed</option>
          </select>
          <span>
        <button onClick={handleClear}>Clear </button>
      </span>
        </div>
    
      </div>
    );
  }
  export default PackingList