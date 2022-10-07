import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { HotelsContext } from "../../context/HotelsContext";

const SearchBar = () => {
  const { searchTerm, handleChangeSearch } = useContext(HotelsContext);

  return (
    <div className="flex mx-5">
      <div className="flex rounded-full border border-light shadow-md hover:shadow-lg px-5">
        <div className="flex items-center m-3">
          <FaSearch />
        </div>
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
