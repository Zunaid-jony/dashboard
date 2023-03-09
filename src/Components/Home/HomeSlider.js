import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './HomeSlider.css'
import "slick-carousel/slick/slick-theme.css";
import IMG from '../../../src/bannar1.png'
import { AiOutlineLeft, AiOutlineLeftSquare, AiOutlineRight } from "react-icons/ai";
function SampleNextArrow( {onClick} ) {
  
  return (
   <div className="arrows arrow-right cursor-pointer " onClick={onClick}>
    <AiOutlineRight className="mt-2 ml-auto mr-auto"></AiOutlineRight>

   </div>
  );
}

function SamplePrevArrow({onClick}) {
 
  return (
    <div className="arrows arrow-left cursor-pointer" onClick={onClick}>
      <AiOutlineLeft className="mt-2 ml-auto mr-auto"></AiOutlineLeft>

    </div>
  );
}

// import IMG from '../../imgs/listing2-850x550-removebg-preview.png'

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <br />
      <br />
      {/* max-w-[1536px] */}
     
      <div className=" overflow-hidden  ml-auto mr-auto   md:mt-3">
        {/* md:m-7 m-7 mt-4 */}

        <Slider {...settings}>
          <div className="z-0 ">
            <img
              className="  mr-auto ml-auto w-full hight-class"
              src={IMG}
              alt=""
            />
          </div>
          <div className="z-0 ">
            <img
              className="  mr-auto ml-auto w-full hight-class"
              src={IMG}
              alt=""
            />
          </div>
          <div className="z-0 ">
            <img
              className="  mr-auto ml-auto w-full hight-class"
              src={IMG}
              alt=""
            />
          </div>
          <div className="z-0 ">
            <img
              className="  mr-auto ml-auto w-full hight-class"
              src={IMG}
              alt=""
            />
          </div>
          <div className="z-0 ">
            <img
              className="  mr-auto ml-auto w-full hight-class"
              src={IMG}
              alt=""
            />
          </div>
         
          {/* <div className="z-0">
            <img
              className=" w-full mr-auto ml-auto  "
              src={IMG}
              alt=""
            />
          </div>
          <div className="z-0">
            <img
              className=" w-full mr-auto ml-auto  "
              src={IMG}
              alt=""
            />
          </div> */}
         
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlider;
