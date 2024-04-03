import React from "react";
import Items from "./items";

function PackageList({ items, handleDeleteItem, handelToggleItem }) {
  // const initialItems = [
  //   { id: 1, description: "Passports", quantity: 2, packed: false },
  //   { id: 2, description: "Socks", quantity: 12, packed: true },
  //   { id: 2, description: "charger", quantity: 1, packed: false },
  // ];
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Items
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handelToggleItem={handelToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackageList;
