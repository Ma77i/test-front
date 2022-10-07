import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa"
import { HotelsContext } from "../../context/HotelsContext";

const SearchBar = () => {
  const {searchTerm, handleChangeSearch} = useContext(HotelsContext);



  return (
    <div className="">
      <input
      className="px-5 py-2 rounded-full"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChangeSearch}
      />
    </div>
  );
}


export default SearchBar;