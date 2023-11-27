import { useState } from "react";
import Item from "./Item";
const PackingList = ({ items, onDeleteItem, onCheckItem, onClearAll }) => {
  const [sortedBy, setSortedBy] = useState("input");
  let sortedItem;

  if (sortedBy === "input") sortedItem = items;
  if (sortedBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortedBy === "packed")
    sortedItem = items.slice().sort((a, b) => +a.packed - +b.packed);
  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input">Sort By Input status</option>
          <option value="description">Sort By description status</option>
          <option value="packed">Sort By packed status</option>
        </select>
        <button onClick={onClearAll}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
