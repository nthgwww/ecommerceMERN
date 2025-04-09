import React from "react";
import HomeBanner from "../../HomeBanner";
import banner1 from "../../../assets/images/banner1.jpg";
import { Button, Rating } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { TfiFullscreen } from "react-icons/tfi";
import ProductItem from "../../ProductItem";

const Home = () => {
  return (
    <>
      <HomeBanner />

      <section className="homeProducts" />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="banner">
              <img src={banner1} className="cursor w-100" />
            </div>
          </div>

          <div className="col-md-9 productRow">
            <div className="d-flex align-items-center">
              <div className="info">
                <h3 className="mb-0 hd">BEST SELLERS</h3>
                <p className="textlight text-sml mb-0">
                  Do not miss the current offers untill the end of Aprils.
                </p>
              </div>

              <Button className="viewAllBtn ml-auto">
                View All <IoIosArrowRoundForward />
              </Button>
            </div>

            <div className="product_row w-100 mt-4">
              <Swiper
                spaceBetween={0}
                slidesPerView={4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
              </Swiper>
            </div>



            <div className="d-flex align-items-center mt-5">
              <div className="info">
                <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                <p className="textlight text-sml mb-0">
                  New Products with updated stocks.
                </p>
              </div>

              <Button className="viewAllBtn ml-auto">
                View All <IoIosArrowRoundForward />
              </Button>
            </div>

            <div className="product_row w-100 mt-4">
              <Swiper
                spaceBetween={0}
                slidesPerView={4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
