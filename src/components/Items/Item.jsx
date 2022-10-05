import { Link } from "react-router-dom";

const Item = ({ item }) => {
  
  const spanStyle = "bg-cristal p-1 rounded-lg";

  return (
    <div className="w-full max-w-sm bg-white rounded-lg border-1 shadow-md m-2">
      <img
        className="pb-2 w-full h-60 rounded-t-lg"
        src={item.hotel_photos}
        alt="product image"
      />
      <div className="flex flex-col px-5 pb-5 ">
        <h5 className="text-xl font-semibold tracking-normal text-gray-900">
          {item.name}
        </h5>
        <div className="flex flex-col items-start mt-2.5 mb-5">
          <span className="text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
            Rate: <span className={spanStyle}>{item.hotel_rating}</span>
          </span>
          {/* <span className="text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
            Review Score: <span className={spanStyle}>{item.review_score}</span>
          </span>
          <span className="text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
            Distance from downtown (km):{" "}
            <span className={spanStyle}>{item.distance_from_downtown}</span>
          </span>
          <span className="text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
            Origin: <span className={spanStyle}>{item.origin}</span>
          </span> */}
        </div>
        <div className="flex flex-col items-baseline">
          <span className="text-black text-xs font-semibold">Per night:</span>
          <span className="text-xl font-bold text-gray-900">
            ${item.avg_price_per_night}
          </span>
          <Link to={`/hotels/${item.name}`} className="bg-dark px-5 py-2 rounded-xl text-light">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Item;
