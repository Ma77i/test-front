import ItemList from "../Items/ItemList";
import Loader from "../utils/Loader";
import { useContext } from "react";
import { HotelsContext } from "../../context/HotelsContext";
import SearchBar from "../pure/SearchBar";
import SortDropdown from "../pure/SortDropdown";

const ItemListContainer = () => {

  const { items, isLoading } = useContext(HotelsContext)

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col items-center mx-10 my-5">
        <h2 className="uppercase tracking-widest mx-3">
          Find the best hotel for yourself!
        </h2>
      <div className="container flex justify-center mx-auto">
        <SearchBar />
        <SortDropdown />
      </div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
