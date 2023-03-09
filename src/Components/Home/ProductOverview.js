import React, { useState } from "react";
import { TfiUser } from "react-icons/tfi";
import "./ProductOverview.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Experience from './Experience';

const ProductOverview = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className=' ml-auto mr-auto section section-work-data bg-[url("https://cdn.pixabay.com/photo/2022/06/20/14/20/space-7273891_960_720.jpg")]'>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div
          className="grid md:grid-cols-4 ml-auto mr-auto max-w-[1536px]   text-white   text-left pt-16 pb-16 
        "
        >
          <div className="flex ml-auto mr-auto">
            <dir>
              <p className="text-5xl mt-1 py-auto mr-4">
                <TfiUser></TfiUser>
              </p>
            </dir>
            <div className="ml-3">
              <p className="font-bold text-2xl counter-numbers">
                {counterOn && (
                  <CountUp start={0} end={11} duration={2} delay={0} />
                )}
                +
              </p>
              <p className="font-bold ">YEARS OF EXPERIENCE</p>
            </div>
          </div>
          <div className="flex ml-auto mr-auto">
            <dir>
              <p className="text-5xl mt-1 py-auto mr-4">
                <TfiUser></TfiUser>
              </p>
            </dir>
            <div className="ml-3">
              <p className="font-bold text-2xl counter-numbers">
                {counterOn && (
                  <CountUp start={0} end={20} duration={2} delay={0} />
                )}
                +
              </p>
              <p className="font-bold ">PROFESSIONAL
EXPERTS</p>
            </div>
          </div>
          <div className="flex ml-auto mr-auto">
            <dir>
              <p className="text-5xl mt-1 py-auto mr-4">
                <TfiUser></TfiUser>
              </p>
            </dir>
            <div className="ml-3">
              <p className="font-bold text-2xl counter-numbers">
                {counterOn && (
                  <CountUp start={0} end={1530} duration={2} delay={0} />
                )}
                +
              </p>
              <p className="font-bold ">SUCCESSFUL
PROJECTS</p>
            </div>
          </div>
          <div className="flex ml-auto mr-auto">
            <dir>
              <p className="text-5xl mt-1 py-auto mr-4">
                <TfiUser></TfiUser>
              </p>
            </dir>
            <div className="ml-3">
              <p className="font-bold text-2xl counter-numbers">
                {counterOn && (
                  <CountUp start={0} end={1310} duration={2} delay={0} />
                )}
                +
              </p>
              <p className="font-bold ">SATISFIED CUSTOMERS</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default ProductOverview;
