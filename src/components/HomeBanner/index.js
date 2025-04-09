import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow:true,
    autoplay:true,
  };
  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img src="https://blackcreek.ca/app/uploads/2020/06/sporting-fashion-banner-1.jpg" className="w-100" />
        </div>
        <div className="item">
          <img src="https://t4.ftcdn.net/jpg/03/13/65/17/360_F_313651795_OUrd7HrFYuxo9LXuuREFvRyIPeEfVSLj.jpg" className="w-100" />
        </div>
        <div className="item">
          <img src="https://blackcreek.ca/app/uploads/2020/06/sporting-fashion-banner-1.jpg" className="w-100" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
