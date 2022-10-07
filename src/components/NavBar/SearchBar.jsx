import { useState } from "react";
import { FaSearch } from "react-icons/fa"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="">
      <input
      className="px-5 py-2 rounded-full"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}


export default SearchBar;