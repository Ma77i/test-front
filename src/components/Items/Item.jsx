const Item = ({ item }) => {

  
  return (
    <div className="w-full max-w-sm bg-white rounded-lg border-1 shadow-md m-2">
      <img
        className="pb-2 w-full h-60 rounded-t-lg"
        src={item.hotel_photos}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {item.name}
        </h5>
        <div className="flex flex-col items-start mt-2.5 mb-5">
          <span className="text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
            Rate: <span className="bg-cristal p-1 rounded-lg">{item.hotel_rating}</span>
          </span>
          <span className="text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
            Review Score: <span className="bg-cristal p-1 rounded-lg">{item.review_score}</span>
          </span>
          <span className="text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
            Distance from downtown (km): <span className="bg-cristal p-1 rounded-lg">{item.distance_from_downtown}</span>
          </span>
          <span className="text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
            Origin: <span className="bg-cristal p-1 rounded-lg">{item.origin}</span>
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-black text-xs font-semibold">Per night:</span>
          <span className="text-xl font-bold text-gray-900">
            ${item.avg_price_per_night}
          </span>
          <button className="bg-dark px-5 py-2 rounded-xl text-light">
            See
          </button>
        </div>
      </div>
    </div>
  );
};
export default Item;
