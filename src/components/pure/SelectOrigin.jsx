import { useState } from "react";

const optionStyles =
  "text-black text-md hover:text-grey";

const SelectOrigin = ({ items, setItems, getHotels }) => {
  const [selectOrigin, setSelectOrigin] = useState("");

  const handleChangeSelect = (e) => {
    getHotels();
    setSelectOrigin(e.target.value);

    const filteredHotels = items.filter((hotel) => {
      return hotel.origin.toLowerCase().includes(selectOrigin.toLowerCase());
    });

    if (!filteredHotels.lenght) setItems([]);

    setItems(filteredHotels);
  };

  return (
    <div className="flex rounded-full border border-light shadow-md hover:shadow-lg px-5 mx-2">
      <select
        className="mx-3 focus:outline-none text-xl tracking-wider"
        placeholder="Origin"
        value={selectOrigin}
        onChange={handleChangeSelect}
      >
        <option className="text-grey" selected value="">
          Origin:
        </option>
        <option className={optionStyles} value="booking">
          Booking
        </option>
        <option className={optionStyles} value="expedia">
          Expedia
        </option>
        <option className={optionStyles} value="agoda">
          Agoda
        </option>
      </select>
    </div>
  );
};

export default SelectOrigin;
