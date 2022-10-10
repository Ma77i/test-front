import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HotelsContext } from "../../context/HotelsContext";

const SortDropdown = () => {
  const { items, setItems } = useContext(HotelsContext);
  const navigate = useNavigate()

  const sortByPriceHigh = () => {
    const sortBy = items.sort(
      (a, b) => b.avg_price_per_night - a.avg_price_per_night
      );
      console.log("SORT BY P HtoL", sortBy);
    setItems(sortBy);
    navigate("/hotels")
  };

  const sortByPriceLow = () => {
    console.log("PRICE LOW");
    const sortBy = items.sort(
      (a, b) => a.avg_price_per_night - b.avg_price_per_night
    );
    setItems(sortBy);
    console.log("After", items);
    navigate("/hotels");
  };

  const sortByRating = () => {
    console.log("RATING");
    const sortBy = items.sort(
      (a, b) => b.hotel_rating - a.hotel_rating
    );
    setItems(sortBy);
    navigate("/hotels");
  };

  const sortByReview = () => {
    console.log("REVIEW");
    const sortBy = items.sort((a, b) => b.review_score - a.review_score);
    setItems(sortBy);
    navigate("/hotels");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center border border-light shadow-md hover:shadow-lg rounded-full px-5 py-3 text-xl">
        Sort{" "}
        <svg
          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={sortByPriceHigh}
                  className={`${
                    active ? "bg-violet-500 text-black" : "text-grey"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {/* {active ? (
                    <EditActiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <EditInactiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  )} */}
                  By Price <span className="font-extralight"> (High to Low)</span>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={sortByPriceLow}
                  className={`${
                    active ? "bg-violet-500 text-black" : "text-grey"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  By Price <span className="font-extralight"> (Low to High)</span>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={sortByRating}
                  className={`${
                    active ? "bg-violet-500 text-black" : "text-grey"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  By Rating
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={sortByReview}
                  className={`${
                    active ? "bg-violet-500 text-black" : "text-grey"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  By Review Score
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SortDropdown;
