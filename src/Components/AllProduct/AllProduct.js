import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import AllProducttwo from "./AllProducttwo";
import axios from "axios";
import "./AllSlider.css";
import { AiOutlineLeftSquare, AiOutlineRightSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right cursor-pointer" onClick={onClick}>
      {/* <AiOutlineLeftSquare></AiOutlineLeftSquare> */}
      <AiOutlineRightSquare></AiOutlineRightSquare>
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left cursor-pointer" onClick={onClick}>
      <AiOutlineLeftSquare></AiOutlineLeftSquare>
    </div>
  );
}

const AllProduct = () => {
  const [pItem, setPitem] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  console.log("Crad",card)

  const ProductData = async (value) => {
    try {
      setLoading(true);
      await axios
        .get(
          `https://primeautomationapiapi.primeautomaticdoor.com/products`
          // ` https://prime-automation-server-production.up.railway.app/product`
        )
        .then(function (res) {
          setLoading(false);
          setCard(res?.data);

          console.log(res?.data);
        })
        .catch(function (error) {
        
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
   
    }
  };
  function filterByCategory(array, category) {
    return array.filter(function(item) {
      return item.category === category;
    });
  }
  var filteredItems = filterByCategory(card, 'Accessories');
  var filteredItems2 = filterByCategory(card, 'Aotumatic_RollingShutter');
  var filteredItems3 = filterByCategory(card, 'Accessories');
  var filteredItems4 = filterByCategory(card, 'Accessories');
  var filteredItems5 = filterByCategory(card, 'Accessories');
  var filteredItems6= filterByCategory(card, 'Accessories');
  console.log("filteredItems",filteredItems)
  useEffect(() => {
    ProductData();
  }, [card]);
  // useEffect(() => {
  //   filteredItems();
   
  // }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setSlideIndex(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div>
      <div className="bg-white shadow-xl p-2 container ml-auto mr-auto mt-4 ">
        <dir className="flex justify-between mb-2 mt-2">
          <p className="font-bold text-xl">Accessories</p>
          <Link className="cursor-pointer" to="/categoryDitails">
          <p className="py-2 p-2 bg-[#f04f25] rounded-md text-white">
            View More
          </p>
          </Link>
         
        </dir>
        <hr />
{/* no 1 */}
        <div className="container ml-auto mr-auto  overflow-hidden m-2">
          <Slider {...settings}>
            {filteredItems?.map((item, index) => (
              <div
                className={
                  index == slideIndex
                    ? "slide slide-active grid gap-4 p-3"
                    : "slide grid gap-4 p-3"
                }
              >
                {/* <div className="grid gap-4 p-3"> */}
                <AllProducttwo key={item.index} item={item}></AllProducttwo>
              </div>
            ))}
          </Slider>
        </div>
      </div>



{/* no 2 */}

      <div className="bg-white shadow-xl p-2 container ml-auto mr-auto mt-4 ">
        <dir className="flex justify-between mb-2 mt-2">
          <p className="font-bold text-xl">Automation</p>
          <Link className="cursor-pointer" to="/categoryDitails">
          <p className="py-2 p-2 bg-[#f04f25] rounded-md text-white">
            View More
          </p>
          </Link>
        </dir>
        <hr />

        <div className="container ml-auto mr-auto  overflow-hidden m-2">
          <Slider {...settings}>
            {filteredItems2?.map((item, index) => (
              <div
                className={
                  index == slideIndex
                    ? "slide slide-active grid gap-4 p-3"
                    : "slide grid gap-4 p-3"
                }
              >
                {/* <div className="grid gap-4 p-3"> */}
                <AllProducttwo key={item.index} item={item}></AllProducttwo>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* no 3 */}
      <div className="bg-white shadow-xl p-2 container ml-auto mr-auto mt-4 ">
        <dir className="flex justify-between mb-2 mt-2">
          <p className="font-bold text-xl">Aotumatic Rolling shutter</p>
          <p className="py-2 p-2 bg-[#f04f25] rounded-md text-white">
            View More
          </p>
        </dir>
        <hr />

        <div className="container ml-auto mr-auto  overflow-hidden m-2">
          <Slider {...settings}>
            {card?.map((item, index) => (
              <div
                className={
                  index == slideIndex
                    ? "slide slide-active grid gap-4 p-3"
                    : "slide grid gap-4 p-3"
                }
              >
                {/* <div className="grid gap-4 p-3"> */}
                <AllProducttwo key={item.index} item={item}></AllProducttwo>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* no 4 */}
      <div className="bg-white shadow-xl p-2 container ml-auto mr-auto mt-4 ">
        <dir className="flex justify-between mb-2 mt-2">
          <p className="font-bold text-xl">Autoatic Gate System</p>
          <p className="py-2 p-2 bg-[#f04f25] rounded-md text-white">
            View More
          </p>
        </dir>
        <hr />

        <div className="container ml-auto mr-auto  overflow-hidden m-2">
          <Slider {...settings}>
            {card?.map((item, index) => (
              <div
                className={
                  index == slideIndex
                    ? "slide slide-active grid gap-4 p-3"
                    : "slide grid gap-4 p-3"
                }
              >
                {/* <div className="grid gap-4 p-3"> */}
                <AllProducttwo key={item.index} item={item}></AllProducttwo>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* no 5 */}
      <div className="bg-white shadow-xl p-2 container ml-auto mr-auto mt-4 ">
        <dir className="flex justify-between mb-2 mt-2">
          <p className="font-bold text-xl">Automatic Revolving Door</p>
          <p className="py-2 p-2 bg-[#f04f25] rounded-md text-white">
            View More
          </p>
        </dir>
        <hr />

        <div className="container ml-auto mr-auto  overflow-hidden m-2">
          <Slider {...settings}>
            {card?.map((item, index) => (
              <div
                className={
                  index == slideIndex
                    ? "slide slide-active grid gap-4 p-3"
                    : "slide grid gap-4 p-3"
                }
              >
                {/* <div className="grid gap-4 p-3"> */}
                <AllProducttwo key={item.index} item={item}></AllProducttwo>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* no 6 */}
      <div className="bg-white shadow-xl p-2 container ml-auto mr-auto mt-4 ">
        <dir className="flex justify-between mb-2 mt-2">
          <p className="font-bold text-xl">LCD Advertising Display Klosk</p>
          <p className="py-2 p-2 bg-[#f04f25] rounded-md text-white">
            View More
          </p>
        </dir>
        <hr />

        <div className="container ml-auto mr-auto  overflow-hidden m-2">
          <Slider {...settings}>
            {card?.map((item, index) => (
              <div
                className={
                  index == slideIndex
                    ? "slide slide-active grid gap-4 p-3"
                    : "slide grid gap-4 p-3"
                }
              >
                {/* <div className="grid gap-4 p-3"> */}
                <AllProducttwo key={item.index} item={item}></AllProducttwo>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* no 7 */}
      <div className="bg-white shadow-xl p-2 container ml-auto mr-auto mt-4 ">
        <dir className="flex justify-between mb-2 mt-2">
          <p className="font-bold text-xl">Motor for Rolling shutter</p>
          <p className="py-2 p-2 bg-[#f04f25] rounded-md text-white">
            View More
          </p>
        </dir>
        <hr />

        <div className="container ml-auto mr-auto  overflow-hidden m-2">
          <Slider {...settings}>
            {card?.map((item, index) => (
              <div
                className={
                  index == slideIndex
                    ? "slide slide-active grid gap-4 p-3"
                    : "slide grid gap-4 p-3"
                }
              >
                {/* <div className="grid gap-4 p-3"> */}
                <AllProducttwo key={item.index} item={item}></AllProducttwo>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* no 8 */}
      <div className="bg-white shadow-xl p-2 container ml-auto mr-auto mt-4 ">
        <dir className="flex justify-between mb-2 mt-2">
          <p className="font-bold text-xl">Automatic Swing Door</p>
          <p className="py-2 p-2 bg-[#f04f25] rounded-md text-white">
            View More
          </p>
        </dir>
        <hr />

        <div className="container ml-auto mr-auto  overflow-hidden m-2">
          <Slider {...settings}>
            {card?.map((item, index) => (
              <div
                className={
                  index == slideIndex
                    ? "slide slide-active grid gap-4 p-3"
                    : "slide grid gap-4 p-3"
                }
              >
                {/* <div className="grid gap-4 p-3"> */}
                <AllProducttwo key={item.index} item={item}></AllProducttwo>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* no 9 */}
      <div className="bg-white shadow-xl p-2 container ml-auto mr-auto mt-4 ">
        <dir className="flex justify-between mb-2 mt-2">
          <p className="font-bold text-xl">Archway Gate-walk</p>
          <p className="py-2 p-2 bg-[#f04f25] rounded-md text-white">
            View More
          </p>
        </dir>
        <hr />

        <div className="container ml-auto mr-auto  overflow-hidden m-2">
          <Slider {...settings}>
            {card?.map((item, index) => (
              <div
                className={
                  index == slideIndex
                    ? "slide slide-active grid gap-4 p-3"
                    : "slide grid gap-4 p-3"
                }
              >
                {/* <div className="grid gap-4 p-3"> */}
                <AllProducttwo key={item.index} item={item}></AllProducttwo>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* no 10 */}
      <div className="bg-white shadow-xl p-2 container ml-auto mr-auto mt-4 ">
        <dir className="flex justify-between mb-2 mt-2">
          <p className="font-bold text-xl">Automation</p>
          <p className="py-2 p-2 bg-[#f04f25] rounded-md text-white">
            View More
          </p>
        </dir>
        <hr />

        <div className="container ml-auto mr-auto  overflow-hidden m-2">
          <Slider {...settings}>
            {card?.map((item, index) => (
              <div
                className={
                  index == slideIndex
                    ? "slide slide-active grid gap-4 p-3"
                    : "slide grid gap-4 p-3"
                }
              >
                {/* <div className="grid gap-4 p-3"> */}
                <AllProducttwo key={item.index} item={item}></AllProducttwo>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/*  */}
      {/* no 1 */}
    </div>
  );
};

export default AllProduct;
