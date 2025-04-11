import HomeBanner from "../../HomeBanner";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import { Button, Rating } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { TfiFullscreen } from "react-icons/tfi";
import ProductItem from "../../ProductItem";
import HomeCat from "../../HomeCat";
import banner3 from "../../../assets/images/banner3.jpg";
import banner4 from "../../../assets/images/banner4.jpg";
import coupon from "../../../assets/images/coupon.png";
import { IoMdMail } from "react-icons/io";
import Footer from "../../Footer";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="sticky">
              <div className="">
                <div className="banner">
                  <img src={banner1} className="cursor" />
                </div>
                <div className="banner mt-4">
                  <img src={banner2} className="cursor" />
                </div>
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
                  navigation={true}
                  modules={[Navigation]}
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

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>

              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img src={banner3} className="cursor w-100" />
                </div>
                <div className="banner">
                  <img src={banner4} className="cursor  w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get ......</h3>
              <p className="textlight">
                Join our email subscription now to get <br /> updates on
                promotions and coupons
              </p>

              <form>
                <IoMdMail />
                <input type="text" placeholder="Your Email Address"/>
                <Button className="btn">Subscribe</Button>
              </form>
            </div>
            
            <div className="col-md-6">
              <img src={coupon} />
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Home;
