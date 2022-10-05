import Item from "./Item";

const ItemList = ({ items }) => {
  
  if (!items) return <h1 className="text-6xl text center m-auto">No items to display</h1>;

  return (
    <div className="flex flex-wrap justify-between m-5">
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
