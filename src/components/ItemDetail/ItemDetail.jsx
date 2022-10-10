import { GrLocation } from "react-icons/gr";
import Swal from "sweetalert2";
import Carousel from "./Carousel";

const euroSign = "\u20ac ";

const spanStyleOne =
  "text-black text-xs md:text-sm font-semibold mr-2 pr-2.5 py-0.5 rounded";
const spanStyleTwo = "bg-dark py-1 px-2 rounded-lg text-light";

const ItemDetail = ({ item }) => {

  const handleReserve = () => {
    Swal.fire("Good job!", "You reserve was succesfully received!", "success");
  };

  return (
    <div className="md:flex bg-white rounded-lg border border-light shadow-md m-10">
      <div className="xl:w-6/12 md:p-10">
        <Carousel images={item.hotel_photos} />
      </div>
      <div className="flex flex-col md:w-6/12 p-10">
        <h2 className="xs:text-4xl font-semibold tracking-normal text-black uppercase">
          {item.name}
        </h2>
        <div className="flex items-center my-5 py-1">
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
        <h6 className="flex text-md font-medium tracking-normal text-black my-5">
          <GrLocation />
          {"  "}
          {item.address}
        </h6>
        <p className="py-5">{item.hotel_summary}</p>
        <div className="flex md:flex-col">
          <div className="flex flex-col items-start w-6/12 my-5">
            <span className="text-black text-xs font-semibold">Per night:</span>
            <span className="text-xl font-bold text-gray-900">
              {euroSign}
              {item.avg_price_per_night}
            </span>
          </div>
          <div className="flex flex-col items-end md:items-start w-6/12 my-5">
            <button
              onClick={handleReserve}
              className="bg-deep hover:bg-dark px-10 py-2 rounded-full text-light "
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
