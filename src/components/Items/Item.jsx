import { Link } from "react-router-dom";
import LocationIcon from "../Icons/LocationIcon";
import StarIcon from "../Icons/StarIcon";
import ItemSlider from "./ItemSlider";

const euroSign = "\u20ac ";

const Item = ({ item }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg border-1 shadow-md my-2">
      <ItemSlider images={item.hotel_photos} />
      <div className="flex flex-col pb-5 ">
        <div className="flex w-full pb-3 px-3">
          <h4 className="text-md font-bold tracking-wide text-black">
            {item.name}
          </h4>
          <div className="flex justify-end px-3">
            {" | "}
            <StarIcon />
            <p className="font-bold text-md px-1">{item.hotel_rating}</p>
          </div>
        </div>
        <div className="flex pb-3 px-3">
          <LocationIcon />
          <h6 className="flex text-sm font-light tracking-normal text-black px-1">
            {item.address}
          </h6>
        </div>
        <div className="flex items-start px-4 pb-3">
          <span className="text-md font-bold text-black">
            {euroSign}
            {item.avg_price_per_night}{" "}
            <span className="text-black font-light text-sm"> | Per night</span>
          </span>
        </div>
        <div className="relative flex w-full justify-center items-end">
        <Link
          to={`/hotels/${item.name}`}
          className="bg-deep hover:bg-dark text-light text-center rounded-full w-40 px-5 py-2"
        >
          Read more
        </Link>
        </div>
      </div>
    </div>
  );
};
export default Item;
