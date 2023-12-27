import { useState } from "react";

// const initialItems = [
//   {
//     id: 1,
//     description: "Passports",
//     quantity: 2,
//     packed: false,
//   },
//   {
//     id: 2,
//     description: "Snacks",
//     quantity: 12,
//     packed: false,
//   },
//   {
//     id: 3,
//     description: "Charger",
//     quantity: 3,
//     packed: true,
//   },
// ];

const App = () => {
  // const [items, setItems] = useState(initialItems);
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (e, id) => {
    // const updatedItems = items.map((item) => {
    //   if (item.id === id) {
    //     return { ...item, packed: e.target.checked };
    //   } else {
    //     return { ...item };
    //   }
    // });
    // setItems(updatedItems);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: e.target.checked } : { ...item }
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      <Stats />
    </div>
  );
};

const Logo = () => {
  return (
    <>
      <h1>🌴 Far Away 💼</h1>
    </>
  );
};

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.replace(/\s/g, "")) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  // console.log(items);

  // onSubmit={(e)=> handleSubmit(e)}
  // Value is only - Read Only
  // So to basically update the state each time you change the
  // quantity or text value you use on change event to update the
  // state value

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

const PackagingList = ({ items, onDeleteItem, onUpdateItem }) => {
  return (
    <div className="list">
      <ul>
        {items.length > 0 &&
          items.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onUpdateItem={onUpdateItem}
            />
          ))}
      </ul>
    </div>
  );
};

const Item = ({ item, onDeleteItem, onUpdateItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={(e) => onUpdateItem(e, item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

const Stats = () => {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
};

export default App;
