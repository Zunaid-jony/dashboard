import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientLogo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,

    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden ml-auto mr-auto  shadow-sm p-2 mt-10 mb-10 max-w-[1536px] ">
      <br />
      <br />

     <div className="ml-auto mr-auto ">
     <Slider {...settings}>
        <div className="md:ml-6">
          <img
            src="https://www.primeautomation.com.bd/wp-content/uploads/2020/02/output-onlinepngtools11-1.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.primeautomation.com.bd/wp-content/uploads/2020/02/output-onlinepngtools10-1.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.primeautomation.com.bd/wp-content/uploads/2020/02/output-onlinepngtools9-1.png"
            alt=""
          />
        </div>
        <div className="md:ml-6">
          <img
            src="https://www.primeautomation.com.bd/wp-content/uploads/2020/02/output-onlinepngtools8-1.png"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="https://www.primeautomation.com.bd/wp-content/uploads/2020/02/output-onlinepngtools7-1.png"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="https://www.primeautomation.com.bd/wp-content/uploads/2020/02/output-onlinepngtools6-1.png"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="https://www.primeautomation.com.bd/wp-content/uploads/2020/02/output-onlinepngtools6-1.png"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="https://www.primeautomation.com.bd/wp-content/uploads/2020/02/output-onlinepngtools36-1.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/J7jwf3X/daffodil-removebg-preview.png"
            alt=""
          />

        </div>
      </Slider>
     </div>
      <br />
      <br />
    </div>
  );
};

export default ClientLogo;
