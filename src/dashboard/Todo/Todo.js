import React from "react";
import { HiUserCircle } from "react-icons/hi";

export const Todo = () => {
  return (
    <div className="p-4">
      <div className="mt-8 bg-white shadow flex justify-between  py-2 p-2">
        <p className="text-xl ">Todo</p>
        <p className="border border-blue p-2 px-8 rounded-md">List</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 text-left mt-10">
        <div className="bg-white shadow-md rounded-md py-2">
          <p className="text-xl ml-4"> Todo</p>
        </div>
        <div className="bg-white shadow-md rounded-md py-2">
          <p className="text-xl ml-4">IN PROGRESS</p>
        </div>
        <div className="bg-white shadow-md rounded-md py-2">
          <p className="text-xl ml-4">COMPLETE</p>
        </div>
      </div>

      {/* body */}

      <div>
      <div className="grid md:grid-cols-3 gap-4 mt-8 ">
        <div className="grid grid-cols-4 text-left bg-white shadow-md rounded-md p-4 border-l-4  border-l-[#42f8e9]       cursor-pointer hover:bg-slate-300 ">
          <div className="col-span-3 ">
            <p className="text-sm"> Project List</p>
            <p className="text-xl font-bold">Launch SpaceX</p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="text-right   text-xl ml-12">
              <span>
                {" "}
                <HiUserCircle className="bg-[##4788ff]"></HiUserCircle>{" "}
              </span>
            </p>
          </div>
        </div>



        <div className="grid grid-cols-4 text-left bg-white shadow-md rounded-md p-4 border-l-4  border-l-[#e01717]       cursor-pointer hover:bg-slate-300 ">
          <div className="col-span-3 ">
            <p className="text-sm"> Use - Cases</p>
            <p className="text-xl font-bold">Launch SpaceX</p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="text-right   text-xl ml-12">
              <span>
                {" "}
                <HiUserCircle className="bg-[##4788ff]"></HiUserCircle>{" "}
              </span>
            </p>
          </div>
        </div>





        <div className="grid grid-cols-4 text-left bg-white shadow-md rounded-md p-4 border-l-4  border-l-[#6c7380]       cursor-pointer hover:bg-slate-300 ">
          <div className="col-span-3 ">
            <p className="text-sm"> Project List</p>
            <p className="text-xl font-bold">New Updates</p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="text-right   text-xl ml-12">
              <span>
                {" "}
                <HiUserCircle className="bg-[##4788ff]"></HiUserCircle>{" "}
              </span>
            </p>
          </div>
        </div>

        
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-8 ">
        <div className="grid grid-cols-4 text-left bg-white shadow-md rounded-md p-4 border-l-4  border-l-[#8572f0]       cursor-pointer hover:bg-slate-300 ">
          <div className="col-span-3 ">
            <p className="text-sm"> Project List</p>
            <p className="text-xl font-bold">Launch SpaceX</p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="text-right   text-xl ml-12">
              <span>
                {" "}
                <HiUserCircle className="bg-[##4788ff]"></HiUserCircle>{" "}
              </span>
            </p>
          </div>
        </div>



        <div className="grid grid-cols-4 text-left bg-white shadow-md rounded-md p-4 border-l-4  border-l-[#e01717]       cursor-pointer hover:bg-slate-300 ">
          <div className="col-span-3 ">
            <p className="text-sm"> Use - Cases</p>
            <p className="text-xl font-bold">Launch SpaceX</p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="text-right   text-xl ml-12">
              <span>
                {" "}
                <HiUserCircle className="bg-[##4788ff]"></HiUserCircle>{" "}
              </span>
            </p>
          </div>
        </div>





        <div className="grid grid-cols-4 text-left bg-white shadow-md rounded-md p-4 border-l-4  border-l-[#6c7380]       cursor-pointer hover:bg-slate-300 ">
          <div className="col-span-3 ">
            <p className="text-sm"> Project List</p>
            <p className="text-xl font-bold">New Updates</p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="text-right   text-xl ml-12">
              <span>
                {" "}
                <HiUserCircle className="bg-[##4788ff]"></HiUserCircle>{" "}
              </span>
            </p>
          </div>
        </div>

        
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-8 ">
        <div className="grid grid-cols-4 text-left bg-white shadow-md rounded-md p-4 border-l-4  border-l-[#160d9e]       cursor-pointer hover:bg-slate-300 ">
          <div className="col-span-3 ">
            <p className="text-sm"> Project List</p>
            <p className="text-xl font-bold">Launch SpaceX</p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="text-right   text-xl ml-12">
              <span>
                {" "}
                <HiUserCircle className="bg-[##4788ff]"></HiUserCircle>{" "}
              </span>
            </p>
          </div>
        </div>



        <div className="grid grid-cols-4 text-left bg-white shadow-md rounded-md p-4 border-l-4  border-l-[#f12af1]       cursor-pointer hover:bg-slate-300 ">
          <div className="col-span-3 ">
            <p className="text-sm"> Use - Cases</p>
            <p className="text-xl font-bold">Launch SpaceX</p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="text-right   text-xl ml-12">
              <span>
                {" "}
                <HiUserCircle className="bg-[##4788ff]"></HiUserCircle>{" "}
              </span>
            </p>
          </div>
        </div>





        <div className="grid grid-cols-4 text-left bg-white shadow-md rounded-md p-4 border-l-4  border-l-[#35dbf1]       cursor-pointer hover:bg-slate-300 ">
          <div className="col-span-3 ">
            <p className="text-sm"> Project List</p>
            <p className="text-xl font-bold">New Updates</p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="text-right   text-xl ml-12">
              <span>
                {" "}
                <HiUserCircle className="bg-[##4788ff]"></HiUserCircle>{" "}
              </span>
            </p>
          </div>
        </div>

        
      </div>
      
      </div>
    </div>
  );
};
