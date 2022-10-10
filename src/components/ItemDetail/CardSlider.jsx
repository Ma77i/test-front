import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const CardSlider = ({images}) => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className=""
      >
        {images.map((image, index) => { return (

          <SwiperSlide key={index}>
            <img
              className=""
              src={image}
              alt="hotel image"
            />
          </SwiperSlide>
        )})}
      </Swiper>
    </div>
  );
};

export default CardSlider
