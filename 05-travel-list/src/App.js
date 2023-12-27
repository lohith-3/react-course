import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackagingList from "./components/PackingList";
import Stats from "./components/Stats";

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

  const handleClearItems = () => {
    const confirmClearAction = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmClearAction) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
