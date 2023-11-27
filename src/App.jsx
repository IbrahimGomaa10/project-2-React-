import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
  /// Left state up passed to List to rendering it by map
  const [items, setItems] = useState([]);
  /// passed to Form to add new item on submit
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  /// Delete items from List
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  /// Check Items if packed or not
  const handleCheckItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  /// Handle clear all data
  const handleClearAll = () => {
    setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckItem={handleCheckItem}
        onClearAll={handleClearAll}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
