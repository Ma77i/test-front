import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr"

const Item = ({ item }) => {
  
  const spanStyleOne = "text-black text-xs font-normal mr-1 px-2.5 py-0.5 rounded";
  const spanStyleTwo = "bg-deep p-1 rounded-lg text-light";

  return (
    <div className="w-full max-w-sm bg-white rounded-lg border-1 shadow-md m-2">
      <img
        className="pb-2 w-full h-60 rounded-t-lg"
        src={item.hotel_photos}
        alt="product image"
      />
      <div className="flex flex-col items-center px-5 pb-5 ">
        <h4 className="text-xl font-semibold tracking-normal text-gray-900">
          {item.name}
        </h4>
        <h6 className="flex text-sm font-medium tracking-normal text-gray-900">
          <GrLocation />{"  "}{item.address}
        </h6>
        <div className="flex items-start rounded-full bg-light mt-2.5 mb-5 px-5 py-1">
          <span className={spanStyleOne}>
            Rate: <span className={spanStyleTwo}>{item.hotel_rating}</span>
          </span>
          <span className={spanStyleOne}>
            Distance from downtown (km):{" "}
            <span className={spanStyleTwo}>{item.distance_from_downtown}</span>
          </span>
        </div>
        <Link
          to={`/hotels/${item.name}`}
          className="bg-deep hover:bg-dark text-light text-center rounded-full w-40 px-5 py-2"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};
export default Item;
