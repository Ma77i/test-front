import ItemList from "../Items/ItemList";
import { useContext } from "react";
import { HotelsContext } from "../../context/HotelsContext";
import SearchBar from "../pure/SearchBar";

const ItemListContainer = () => {

  const { items, isLoading } = useContext(HotelsContext)

  return (
    <div className="flex flex-col items-center mx-10">
      <h3 className="hidden md:flex text-center uppercase tracking-widest m-3">
        Find the best hotel for yourself!
      </h3>
      <div className="bg-white md:sticky top-16 z-[100] rounded-full flex justify-center mx-auto">
        <SearchBar />
      </div>
      <ItemList items={items} isLoading={isLoading} />
    </div>
  );
};

export default ItemListContainer;
