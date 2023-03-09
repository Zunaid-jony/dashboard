import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Service = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
  <div className=" bg-white">
    <br />

   
      <div className="">
      <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 ml-auto mr-auto container gap-5 p-3 overflow-hidden">
        <Link
          to="/categoryDitails"
          className="bg-white border-t-2 border-[#f04f25] rounded-md  shadow-md hover:shadow-xl text-center"
        >
          <div>
        
            <Slider {...settings}>
              <div>
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/9ThS2K7/sabiir1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/9ThS2K7/sabiir1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/9ThS2K7/sabiir1.jpg"
                  alt=""
                />
              </div>
            </Slider>
          </div>

          <p className="p-2 fond-bold">Automatic Rolling Shutter</p>
        </Link>



        <Link
          to="/categoryDitails"
          className="bg-white border-t-2 border-[#f04f25] rounded-md  shadow-md hover:shadow-xl text-center"
        >
          <div>
        
            <Slider {...settings}>
              <div>

             
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/Qn1KFMC/sabbir-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/Qn1KFMC/sabbir-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/Qn1KFMC/sabbir-2.jpg"
                  alt=""
                />
              </div>
            </Slider>
          </div>

          <p className="p-2 fond-bold">Motor For Rolling Shutter</p>
        </Link>




        <Link
          to="/categoryDitails"
          className="bg-white border-t-2 border-[#f04f25] rounded-md  shadow-md hover:shadow-xl text-center"
        >
          <div>
        
            <Slider {...settings}>
              <div>
      
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/R4M6bwq/S33.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/R4M6bwq/S33.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/R4M6bwq/S33.jpg"
                  alt=""
                />
              </div>
            </Slider>
          </div>

          <p className="p-2 fond-bold">Automatic Curtain</p>
        </Link>



        <Link
          to="/categoryDitails"
          className="bg-white border-t-2 border-[#f04f25] rounded-md  shadow-md hover:shadow-xl text-center"
        >
          <div>
        
            <Slider {...settings}>
              <div>
           
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/y5kFDz5/ss41.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/y5kFDz5/ss41.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/y5kFDz5/ss41.webp"
                  alt=""
                />
              </div>
            </Slider>
          </div>

          <p className="p-2 fond-bold">Car Parking Management </p>
        </Link>

        <Link
          to="/categoryDitails"
          className="bg-white border-t-2 border-[#f04f25] rounded-md  shadow-md hover:shadow-xl text-center"
        >
          <div>
        
            <Slider {...settings}>
              <div>
             
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/cTxGHhn/last.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/cTxGHhn/last.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ml-auto mr-auto h-32 w-full  overflow-hidden "
                  src="https://i.ibb.co/cTxGHhn/last.jpg"
                  alt=""
                />
              </div>
            </Slider>
          </div>

          <p className="p-2 fond-bold">Turnstile And Barrier</p>
        </Link>
      </div>
      <br />
    </div>
  </div>
  );
};

export default Service;
