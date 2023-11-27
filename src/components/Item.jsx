const Item = ({ item, onDeleteItem, onCheckItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onCheckItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : null}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
