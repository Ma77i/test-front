import { useContext, useState } from "react";
import { HotelsContext } from "../../context/HotelsContext";
import SearchIcon from "../Icons/SearchIcon";
import SelectOrigin from "./SelectOrigin";
import SelectSort from "./SelectSort";

const SearchBar = () => {
  const { items, setItems, getHotels } = useContext(HotelsContext);

  const [searchName, setSearchName] = useState("");
  const [searchAddress, setSearchAddress] = useState("");

  const handleChangeSearchName = (e) => {
    setSearchName(e.target.value);

    if (e.target.value === "") getHotels();

    const filteredHotels = items.filter((hotel) => {
      return hotel.name.toLowerCase().includes(searchName.toLowerCase());
    });

    if (!filteredHotels.lenght) setItems([]);

    setItems(filteredHotels);
  };

  const handleChangeSearchAddress = (e) => {
    setSearchAddress(e.target.value);

    if (e.target.value === "") {
      getHotels();
    }

    const filteredHotels = items.filter((hotel) => {
      return hotel.address.toLowerCase().includes(searchAddress.toLowerCase());
    });

    if (!filteredHotels.lenght) {
      setItems([]);
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
    <div className="flex flex-col md:flex-row mx-2">
      <div className="flex rounded-full border border-light shadow-md hover:shadow-lg px-2 m-2">
        <button className="flex items-center m-3" onClick={handleClick}>
          <SearchIcon />
        </button>
        <input
          className="mx-3 focus:outline-none text-md tracking-wider "
          type="text"
          placeholder="Name"
          value={searchName}
          onChange={handleChangeSearchName}
        />
      </div>
      <div className="flex rounded-full border border-light shadow-md hover:shadow-lg px-2 m-2">
        <button className="flex items-center m-3" onClick={handleClick}>
          <SearchIcon />
        </button>
        <input
          className="mx-3 focus:outline-none text-md tracking-wider"
          type="text"
          placeholder="Address"
          value={searchAddress}
          onChange={handleChangeSearchAddress}
        />
      </div>
      <SelectOrigin items={items} setItems={setItems} getHotels={getHotels} />
      <SelectSort items={items} setItems={setItems} getHotels={getHotels} />
    </div>
  );
};

export default SearchBar;
