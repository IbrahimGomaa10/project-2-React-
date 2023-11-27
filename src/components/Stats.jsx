const Stats = ({ items }) => {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  if (!numItems) {
    return (
      <p className="stats">
        <em>You need to pick your trip needs....</em>
      </p>
    );
  }
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You Packed Everything ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed ${packedItems} ${percentage}%`}
      </em>
    </footer>
  );
};

export default Stats;
