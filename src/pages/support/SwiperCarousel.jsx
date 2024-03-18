/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";

const SwiperCarousel = ({ children, items  }) => {
    let Element = items.shap;
    const cloneEl = items.data.map((el) => (
    <SwiperSlide key={el.data.id}>
      {React.cloneElement(<Element /> , { item: el.data })}
    </SwiperSlide>
  ));
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={items.slidesPerView ? items.slidesPerView :3}
      navigation={items.navigation ? items.navigation : false}
      pagination={{ clickable: true , enabled: items.enabled ? items.enabled: false}}
    >
      {cloneEl}
    </Swiper>
  );
};

export default SwiperCarousel;
