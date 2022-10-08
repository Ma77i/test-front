// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import { Link } from "react-router-dom";
import StarIcon from "../../components/Icons/StarIcon";
import LocationIcon from "../../components/Icons/LocationIcon";

const HomeSlider = ({ items }) => {
  const euroSign = "\u20ac ";

  return (
    <div className="w-10/12 p-5 border border-light shadow-lg rounded-xl">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="w-full"
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link to={`hotels/${item.name}`}>
                <div className="flex flex-col border border-light shadow-lg rounded-xl hover:scale-110">
                  <img
                    className="pb-2 w-full h-72 rounded-t-xl"
                    src={item.hotel_photos}
                    alt="item"
                  />
                  <div className="flex w-full pb-3 px-3">
                    <h4 className="text-md font-bold tracking-wide text-black">
                      {item.name}
                    </h4>
                    <div className="flex justify-end px-3">
                      {" | "}
                      <StarIcon />
                      <p className="font-bold text-md px-1">
                        {item.hotel_rating}
                      </p>
                    </div>
                  </div>
                  <div className="flex pb-3 px-3">
                    <LocationIcon />
                    <h6 className="flex text-md tracking-normal text-black px-1">
                      {item.address}
                    </h6>
                  </div>
                  <div className="flex items-start px-4 pb-3">
                    <span className="text-md font-bold text-black">
                      {euroSign}
                      {item.avg_price_per_night}{" "}
                      <span className="text-black font-light text-md"> | Per night</span>
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex flex-col items-center">
        <h3 className="uppercase tracking-wider">
          Checkout all available hotels
        </h3>
        <Link
          className="flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-deep hover:bg-dark text-light text-4xl rounded-full mt-5 px-20 py-5 tracking-widest"
          to="/hotels"
        >
          HERE
        </Link>
      </div>
    </div>
  );
};
export default HomeSlider;
