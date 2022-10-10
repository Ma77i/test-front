// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/lazy";

// import required modules
import { Pagination, Lazy } from "swiper";

const ItemSlider = ({ images }) => {

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Lazy]}
        className="w-full"
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                className="pb-2 w-full h-60 rounded-t-lg"
                src={item}
                alt="product image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default ItemSlider;
