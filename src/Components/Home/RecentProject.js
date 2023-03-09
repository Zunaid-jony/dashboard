import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Slider from "react-slick";
import Recenttwo from "./Recenttwo";

const RecentProject = () => {
  const [pItem, setPitem] = useState([]);
  // useEffect(() => {
  //   // fetch("https://run.mocky.io/v3/30e41d0f-7a95-474e-ab78-8657fad08f65")
  //   fetch("https://run.mocky.io/v3/5fbe415e-626f-4f0e-bc06-791af18704c9")
  //     .then((res) => res.json())
  //     .then((data) => setPitem(data));
  // }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white">
      <br />
      <br />
      <br />
      <h1 className="  text-xl font-bold md:text-4xl text-[#f04f25] ml-auto mr-auto">
        Recent Project
      </h1>

      <div className="container ml-auto mr-auto  overflow-hidden m-2">
        <Slider {...settings}>
          {pItem?.map((item) => (
            <div className="grid gap-4 p-3">
              <Recenttwo key={item.id} item={item}></Recenttwo>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecentProject;
