import React from "react";
import AboutCart from "../../Home/AboutCart";
import AboutUs from "../../Home/AboutUs";
import HomeSlider from "../../Home/HomeSlider";
import OurTeam from "../../Home/OurTeam";
import ProductOverview from "../../Home/ProductOverview";
import Testimonials from "../../Home/Testimonials";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Listing = () => {
  return ( 
    <div>
      <Navigation></Navigation>
      <br />
      <br />

      <div>
        <div className=' ml-auto mr-auto section section-work-data bg-[url("https://cdn.pixabay.com/photo/2022/06/20/14/20/space-7273891_960_720.jpg")]'>
          <div className="ml-auto   text-white    pt-20 pb-20 ">
            <p className="">About Us</p>
            <p className="text-xl"> <span className="mr-1">Home </span>  > <span className="ml-1">About Us</span> </p>
          </div>
        </div>
      </div>
      <AboutCart></AboutCart>
      <AboutUs></AboutUs>
     
      <ProductOverview></ProductOverview>
      <Testimonials></Testimonials>
      <OurTeam></OurTeam>

      <Footer></Footer>
    </div>
  );
};

export default Listing;
