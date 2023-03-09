import React, { useEffect, useState } from "react";

import Footer from "../Header/Footer/Footer";
import Navigation from "../Header/Footer/Navigation";
import AboutCart from "./AboutCart";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import ClientLogo from "./ClientLogo";
import Contact from "./Contact";

import Experience from "./Experience";

import HomeSlider from "./HomeSlider";
import HomeCard from "./MainCard/HomeCard";
import OurTeam from "./OurTeam";
import Portfolio from "./Portfolio";
import ProductOverview from "./ProductOverview";

import RecentProject from "./RecentProject";
import Service from "./Service";
import SocialBar from "./SocialBar";
import Testimonials from "./Testimonials";

function Home() {
  const [setCard] = useState([]);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/bd0e9c4b-f774-4dc3-baa5-7226d73e4b56")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <HomeSlider></HomeSlider>
      {/* <Test></Test> */}
      <Service></Service>
      <AboutCart></AboutCart>
      <AboutUs></AboutUs>
     

      <ProductOverview></ProductOverview>
      <HomeCard></HomeCard>
      {/* <CustomerReviews></CustomerReviews> */}
     
      <OurTeam></OurTeam>
      <Testimonials></Testimonials>
      <Blog></Blog>
      <SocialBar></SocialBar>
      {/* <RecentProject></RecentProject> */}
      {/* <Experience></Experience> */}

      <ClientLogo></ClientLogo>
      <Portfolio></Portfolio>
      <Contact></Contact>

      {/* <ProductStyle></ProductStyle> */}

      <Footer></Footer>
    </div>
  );
}

export default Home;
