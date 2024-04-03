import React from "react";

function Items({ item, handleDeleteItem, handelToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handelToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.qty} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}> ❌</button>
    </li>
  );
}

export default Items;
