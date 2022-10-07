import ItemList from "../Items/ItemList";
import Loader from "../utils/Loader";
import { useContext } from "react";
import { HotelsContext } from "../../context/HotelsContext";

const ItemListContainer = () => {

  const { items, isLoading } = useContext(HotelsContext)

  if (isLoading) return <Loader />;

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
