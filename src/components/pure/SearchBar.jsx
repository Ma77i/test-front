import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HotelsContext } from "../../context/HotelsContext";
import SearchIcon from "../Icons/SearchIcon";
import ItemList from "../Items/ItemList"

const SearchBar = () => {
  const { items, setItems, getHotels } = useContext(HotelsContext);

  const [searchName, setSearchName] = useState("");
  const [searchAddress, setSearchAddress] = useState("");

  // SEARCH BAR
  const handleChangeSearchName = (event) => {
    setSearchName(event.target.value);

    if (event.target.value === "") {
      getHotels();
    }

    const filteredHotels = items.filter((hotel) => {
      return hotel.name.toLowerCase().includes(searchName.toLowerCase());
    });

    if (!filteredHotels.lenght) {
      setItems([])
    }

    setItems(filteredHotels);

  };

  const handleChangeSearchAddress = (event) => {
    setSearchAddress(event.target.value);

    if (event.target.value === "") {
      getHotels();
    }

    const filteredHotels = items.filter((hotel) => {
      return hotel.address.toLowerCase().includes(searchAddress.toLowerCase());
    });

    if (!filteredHotels.lenght) {
      setItems([])
    }

    setItems(filteredHotels);
  };

  const handleClick = () => {
    const filteredHotels = items.filter((hotel) => {
      return hotel.name.toLowerCase().includes(searchName.toLowerCase());
    });
    console.log(filteredHotels);
    setItems(filteredHotels);
  };

  return (
    <div className="flex mx-5">
      <div className="flex rounded-full border border-light shadow-md hover:shadow-lg px-5">
        <button className="flex items-center m-3" onClick={handleClick}>
          <SearchIcon />
        </button>
        <input
          className="mx-3 focus:outline-none text-xl tracking-wider"
          type="text"
          placeholder="Name"
          value={searchName}
          onChange={handleChangeSearchName}
        />
        <input
          className="mx-3 focus:outline-none text-xl tracking-wider"
          type="text"
          placeholder="Address"
          value={searchAddress}
          onChange={handleChangeSearchAddress}
        />
      </div>
    </div>
  );
};

export default SearchBar;
