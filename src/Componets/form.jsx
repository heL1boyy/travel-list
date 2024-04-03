import React, { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState(1);

  function handleSumbit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, qty, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);
    setDescription("");
    setQty(1);
  }
  return (
    <form className="add-form" onSubmit={handleSumbit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
