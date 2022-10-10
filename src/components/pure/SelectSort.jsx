import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const optionStyles = "text-black text-md hover:text-grey";

const SelectSort = ({ items, setItems }) => {
  const [selectSort, setSelectSort] = useState("");
  const navigate = useNavigate();

  const handleChangeSelect = (e) => {
    setSelectSort(e.target.value);
  };

  useEffect(() => {

    if (selectSort === "priceHigh") {
      const sortByHighPrice = items.sort(
        (a, b) => b.avg_price_per_night - a.avg_price_per_night
      );
      setItems(sortByHighPrice);
      navigate("/hotels");
    }

    if (selectSort === "priceLow") {
      const sortByLowPrice = items.sort(
        (a, b) => a.avg_price_per_night - b.avg_price_per_night
      );
      setItems(sortByLowPrice);
      console.log("After", items);
      navigate("/hotels");
    }

    if (selectSort === "rating") {
      console.log("RATING");
      const sortBy = items.sort((a, b) => b.hotel_rating - a.hotel_rating);
      setItems(sortBy);
      navigate("/hotels");
    }

    if (selectSort === "review") {
      console.log("REVIEW");
      const sortBy = items.sort((a, b) => b.review_score - a.review_score);
      setItems(sortBy);
      navigate("/hotels");
    }
  }, [selectSort]);

  return (
    <div className="flex rounded-full border border-light shadow-md hover:shadow-lg px-5 m-2">
      <select
        className="mx-3 focus:outline-none text-xl tracking-wider"
        placeholder="Origin"
        value={selectSort}
        onChange={handleChangeSelect}
      >
        <option className="text-grey" hidden value="">
          Sort:
        </option>
        <option className={optionStyles} value="priceHigh">
          Price (High to Low)
        </option>
        <option className={optionStyles} value="priceLow">
          Price (Low to High)
        </option>
        <option className={optionStyles} value="rating">
          Rating
        </option>
        <option className={optionStyles} value="review">
          Review Score
        </option>
      </select>
    </div>
  );
};

export default SelectSort;
