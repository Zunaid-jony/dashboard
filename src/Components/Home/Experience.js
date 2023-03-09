import React from "react";

import { FaDharmachakra } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { RiTimer2Fill } from "react-icons/ri";

const Experience = () => {
  return (
    <div className=" ml-auto mr-auto">
      <div className=" bg-[url('https://aedit.wpengine.com/wp-content/uploads/2019/06/bg1-3.jpg')]  bg-gradient-to-r from-[#252627]">
        <div className="grid md:grid-cols-2 max-w-[1536px] ml-auto mr-auto">
          <div>
            <div className="">
              <div
                className="w-96 h-96 mt-24 
             bg-[#f04f25] shadow-md ml-auto mr-auto "
              ></div>
            </div>
            <div className="ml-24 mb-10">
              <img
                className="w-96 h-96 ml-auto mr-auto -mt-80"
                src="https://aedit.wpengine.com/wp-content/uploads/2019/06/filler2-1-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="border-l-4 border-[#f04f25] text-left">
              <div className="ml-6 mt-24">
                <p className="text-xl">What we can do?</p>
                <p className="text-4xl font-bold">20+ Years of</p>
                <p className="text-4xl font-bold"> Experience in </p>
                <p className="text-4xl font-bold">Financial & Business</p>
                <p className="text-4xl font-bold">Audit Services</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-2 text-left mt-10  md:mr-24 ">
              <div className="flex ">
                <div className="grid grid-cols-3 shadow-md bg-[#f04f25] text-white font-bold">
                  <p className="ml-auto mr-auto text-white text-4xl p-2 py-auto mt-3">
                    {" "}
                    <FaDharmachakra></FaDharmachakra>{" "}
                  </p>
                  <div className="col-span-2 p-4">
                    <p>KEEP YOUR</p>
                    <p>SECRETS SAFELY</p>
                  </div>
                </div>
              </div>

              <div className="flex ">
                <div className="grid grid-cols-3 shadow-md bg-slate-400 hover:bg-[#f04f25] text-white font-bold">
                  <p className="ml-auto mr-auto text-white text-4xl p-2 py-auto mt-3">
                    {" "}
                    <MdGroups></MdGroups>{" "}
                  </p>
                  <div className="col-span-2 p-4">
                    <p>KEEP YOUR</p>
                    <p>SECRETS SAFELY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-2 text-left mt-4  md:mr-24 ">
              <div className="flex ">
                <div className="grid grid-cols-3 shadow-md bg-slate-400 hover:bg-[#f04f25] text-white font-bold">
                  <p className="ml-auto mr-auto text-white text-4xl p-2 py-auto mt-3">
                    {" "}
                    <RiTimer2Fill></RiTimer2Fill>{" "}
                  </p>
                  <div className="col-span-2 p-4">
                    <p>KEEP YOUR</p>
                    <p>SECRETS SAFELY</p>
                  </div>
                </div>
              </div>

              <div className="flex ">
                <div className="grid grid-cols-3 shadow-md bg-slate-400 hover:bg-[#f04f25] text-white font-bold">
                  <p className="ml-auto mr-auto text-white text-4xl p-2 py-auto mt-3">
                    {" "}
                    <BsGraphUp></BsGraphUp>{" "}
                  </p>
                  <div className="col-span-2 p-4">
                    <p>KEEP YOUR</p>
                    <p>SECRETS SAFELY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
