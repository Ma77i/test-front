import Item from "./Item";
import Loader from "../utils/Loader"

const ItemList = ({ items, isLoading }) => {

  if (isLoading) return <Loader />
  
  if (!items.length) return <h1 className="text-center uppercase m-10 p-10 tracking-widest">No hotel found</h1>;


  return (
    <div className="flex flex-wrap justify-between m-5">
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
