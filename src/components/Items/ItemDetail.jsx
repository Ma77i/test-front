const Item = ({ item }) => {
  
  const spanStyleOne = "text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3";
 const spanStyleTwo = "bg-deep p-1 rounded-lg text-light";
  return (
    <div className="w-full max-w-2xl bg-white rounded-lg border-1 shadow-md m-2">
      <img
        className="pb-2 w-full h-96 rounded-t-lg"
        src={item.hotel_photos}
        alt="product image"
      />
      <div className="flex flex-col px-5 pb-5 ">
        <h2 className="text-center font-semibold tracking-normal text-gray-900">
          {item.name.toUpperCase()}
        </h2>
        <div className="flex items-start rounded-full bg-light mt-2.5 mb-5 px-5 py-1">
          <span className={spanStyleOne}>
            Rate: <span className={spanStyleTwo}>{item.hotel_rating}</span>
          </span>
          <span className={spanStyleOne}>
            Review Score:{" "}
            <span className={spanStyleTwo}>{item.review_score}</span>
          </span>
          <span className={spanStyleOne}>
            Distance from downtown (km):{" "}
            <span className={spanStyleTwo}>{item.distance_from_downtown}</span>
          </span>
          <span className={spanStyleOne}>
            Origin: <span className={spanStyleTwo}>{item.origin}</span>
          </span>
        </div>
        <p className="">{item.hotel_summary}</p>
        <div className="flex flex-col items-start">
          <span className="text-black text-xs font-semibold">Per night:</span>
          <span className="text-xl font-bold text-gray-900">
            ${item.avg_price_per_night}
          </span>
          {/* <button className="bg-dark px-5 py-2 rounded-xl text-light">
            See
          </button> */}
        </div>
      </div>
    </div>
  );
};
export default Item;
