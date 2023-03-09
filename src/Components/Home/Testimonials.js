import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialsAnimation.css";

const Testimonials = () => {
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
    <div className=" sm:bg-[url('https://i.ibb.co/bHC84KW/3439410-61807.jpg')] ">
      <div className="grid md:grid-cols-2 gap-12 ml-auto mr-auto  container overflow-hidden  w-full bg-cover">
        <div className="md:w-96 md:ml-28 md:mt-40 md:mb-20 w-full">
          <Slider {...settings}>
            <div className="ml-auto mr-auto ">
              <div className="bg-white shadow-md p-2 ml-auto mr-auto ">
                <img
                  className="ml-auto mr-auto  w-20 h-20 mt-10 mb-6 rounded-full  overflow-hidden "
                  src="https://i.ibb.co/9ThS2K7/sabiir1.jpg"
                  alt=""
                />
                <p className="text-xl font-bold mt-2">Md Jony Hossin</p>
                <p className="text-[#f04f25]  mt-2">BUSINESS CONSULTANT</p>
                <p className=" text-sm mt-4 text-gray-400">
                  Sed at laoreet odio. Nulla id dolor eu
                </p>
                <p className="text-sm text-gray-400 mb-10">
                  {" "}
                  augue iaculiqs ultrices sit amet id tellus.
                </p>
              </div>
            </div>
            <div className="ml-auto mr-auto ">
              <div className="bg-white shadow-md p-2 ml-auto mr-auto ">
                <img
                  className="ml-auto mr-auto  w-20 h-20 mt-10 mb-6 rounded-full  overflow-hidden "
                  src="https://i.ibb.co/9ThS2K7/sabiir1.jpg"
                  alt=""
                />
                <p className="text-xl font-bold mt-2">Md Jony Hossin</p>
                <p className="text-[#f04f25]  mt-2">BUSINESS CONSULTANT</p>
                <p className=" text-sm mt-4 text-gray-400">
                  Sed at laoreet odio. Nulla id dolor eu
                </p>
                <p className="text-sm text-gray-400 mb-10">
                  {" "}
                  augue iaculiqs ultrices sit amet id tellus.
                </p>
              </div>
            </div>
          </Slider>
        </div>

        <div>
          <div className="flex  md:mt-10 ">
            {/*animate-ping absolute inline-flex  opacity-75 bg-opacity-10 */}
            <img
              className="w-32 md:h-32 rounded-full md:-ml-20 mt-10   opacity-100 transition zoom-in-out-box duration-1000 "
              src="https://i.ibb.co/N7N2wL1/274614649-3098589300383211-4560155483921787883-n.jpg"
              alt=""
            />

            <img
              className="w-20 h-20 rounded-full md:ml-20 md:mt-40 zoom-in-out-box "
              src="https://i.ibb.co/N7N2wL1/274614649-3098589300383211-4560155483921787883-n.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 rounded-full md:ml-28 mt-8 zoom-in-out-box "
              src="https://i.ibb.co/N7N2wL1/274614649-3098589300383211-4560155483921787883-n.jpg"
              alt=""
            />
          </div>
          <div className="md:flex  sm:block hidden">
            <img
              className="w-20 h-20 rounded-full md:-ml-20 mt-10 zoom-in-out-box "
              src="https://i.ibb.co/N7N2wL1/274614649-3098589300383211-4560155483921787883-n.jpg"
              alt=""
            />

            <img
              className="w-28 h-28 rounded-full md:ml-16 md:mt-32 mb-4 zoom-in-out-box "
              src="https://i.ibb.co/N7N2wL1/274614649-3098589300383211-4560155483921787883-n.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 rounded-full md:ml-40 mt-8 zoom-in-out-box "
              src="https://i.ibb.co/N7N2wL1/274614649-3098589300383211-4560155483921787883-n.jpg"
              alt=""
            />
          </div>
        </div>

        {/* right side */}
      </div>
    </div>
  );
};

export default Testimonials;
