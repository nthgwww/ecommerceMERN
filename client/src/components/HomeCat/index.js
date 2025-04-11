import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HomeCat = () => {
  const [itemBg, setItemBg] = useState([
    "fffceb",
    "ecffec",
    "feefea",
    "fff3ff",
    "f2fce4",
    "feefea",
    "ecffec",
    "fffceb",
    "faceff",
    "faceff",
    "faceff",
    "faceff",
  ]);

  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-3 hd">Featured Categories</h3>
        <Swiper
          spaceBetween={8}
          slidesPerView={10}
          navigation={true}
          slidesPerGroup={3}
          modules={[Navigation]}
          className="mySwiper"
        >
          {itemBg?.map((item, index) => {
            return (
              <SwiperSlide>
                <div className="item text-center cursor" style = {{background: item}}>
                  <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" />
                  <h6>Fashion</h6>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
