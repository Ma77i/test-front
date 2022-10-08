import { useState } from "react";
import { Link } from "react-router-dom";

const HomeCarousel = ({ items }) => {
  const [actualItem, setActualItem] = useState(0);
  const qty = items?.length;

  console.log(items);

  if (!Array.isArray(items) || qty === 0) return;

  const nextImage = () => {
    setActualItem(actualItem === qty - 1 ? 0 : actualItem + 1);
  };

  const previousitem = () => {
    setActualItem(actualItem === 0 ? qty - 1 : actualItem - 1);
  };

  return (
    <div className="w-4/12 m-10 p-5 border border-light shadow-lg rounded-xl">
      {items.map((item, index) => {
        return (
          <Link to={`hotels/${item.name}`}>
            {actualItem === index && (
              <div key={index} className="flex flex-col items-center">
                <img
                  className="pb-2 w-full h-72 rounded-t-xl"
                  src={item.hotel_photos}
                  alt="item"
                />
                <h3 className="font-semibold tracking-normal text-gray-900">
                  {item.name}
                </h3>
              </div>
            )}
          </Link>
        );
      })}
      <div className="flex justify-center">
        <button className="bg-cristal px-5 mx-5" onClick={previousitem}>
          ←
        </button>
        <button className="bg-cristal px-5 mx-5" onClick={nextImage}>
          →
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
