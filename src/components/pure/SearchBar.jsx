import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HotelsContext } from "../../context/HotelsContext";
import ItemList from "../Items/ItemList"

const SearchBar = () => {
  const { items, setItems, getHotels } = useContext(HotelsContext);

  const [searchTerm, setSearchTerm] = useState("");

  // SEARCH BAR
  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);

    if (event.target.value === "") {
      getHotels();
    }

    
    const filteredHotels = items.filter((hotel) => {
      return hotel.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (!filteredHotels.lenght) {
      setItems([])
    }

    setItems(filteredHotels);

  };

  const handleClick = () => {
    const filteredHotels = items.filter((hotel) => {
      return hotel.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log(filteredHotels);
    setItems(filteredHotels);
  };

  return (
    <div className="flex mx-5">
      <div className="flex rounded-full border border-light shadow-md hover:shadow-lg px-5">
        <button className="flex items-center m-3" onClick={handleClick}>
          <FaSearch />
        </button>
        <input
          className="mx-3 focus:outline-none text-xl tracking-wider"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChangeSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
