import React, { useState } from "react";
import Logo from "./Componets/logo";
import Form from "./Componets/form";
import Stats from "./Componets/stats";
import PackageList from "./Componets/packinglist";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackageList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handelToggleItem={handelToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
