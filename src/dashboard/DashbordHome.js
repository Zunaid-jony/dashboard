import React, { Fragment } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import { SlCalender } from "react-icons/sl";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import Tebile from "./Tebile";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DashbordHome = () => {
  const data = [
    { name: "July", users: 200000000 },
    { name: "August", users: 150000000 },
    { name: "September", users: 100000000 },
    { name: "October", users: 500000000 },
  ];
  return (
    <div className=" mt-8 container ml-auto mr-auto md:px-6 p-2">
      <div className="flex justify-between container ">
        <p className="text-xl font-bold text-[#213446]">Overview</p>

        <div date-rangepicker className="flex items-center">
          <div class="relative cursor-pointer">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
              {/* <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> */}
            </div>
            <input
              name="start"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date start"
            />
          </div>
          <span className="mx-4 text-gray-500">to</span>
          <div className="relative cursor-pointer">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              {/* <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> */}
            </div>
            <input
              name="end"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date end"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 mt-6 gap-6 ">
        <div className="col-span-2 ">
          <div className="grid md:grid-cols-3 gap-6 ml-auto mr-auto m-2">
            <div className="bg-white shadow-md rounded-md p-2  border-t-2 border-[#0ee0a1]">
              <p className=" text-gray-400">Total Profit</p>

              <p className="mt-2 font-bold">
                <span> $95,595</span>{" "}
                <span className="ml-4 text-[#41c662]">+3.55%</span>
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-2  border-b-2 border-[#0ee0a1]">
              <p className=" text-gray-400">Total Expenses</p>

              <p className="mt-2 font-bold">
                <span> $95,595</span>{" "}
                <span className="ml-4 text-[#41c662]">+3.55%</span>
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-2  border-t-2 border-[#0ee0a1]">
              <p className=" text-gray-400">New Users</p>

              <p className="mt-2 font-bold">
                <span> $95,595</span>{" "}
                <span className="ml-4 text-[#e44848]">+3.55%</span>
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white shadow-md rounded-md h-80">
            <div style={{ textAlign: "center" }}>
              {/* <h1 className="mt-10 text-xl font-bold">View User Graph</h1> */}
              <div className=" mt-10 p-4 ml-auto mr-auto ">
                {/* <div>
                  <PieChart width={400} height={400}>
                    <Pie
                      dataKey="users"
                      isAnimationActive={false}
                      data={data}
                      cx={200}
                      cy={200}
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    />
                    <Tooltip />
                  </PieChart>
                </div> */}
                <div className="ml-auto mr-auto  m-2  overflow-hidden container ">
                  <BarChart
                    width={460}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,

                      bottom: 5,
                    }}
                    barSize={20}
                  >
                    <XAxis
                      dataKey="name"
                      scale="point"
                      padding={{ left: 10, right: 10 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar
                      dataKey="users"
                      fill="#8884d8"
                      background={{ fill: "#eee" }}
                    />
                  </BarChart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:row-span-1 bg-white shadow-md rounded-md  w-full">
          <p className="text-2xl font-bold mb-1 mt-1 text-left ml-2 p-2">
            Top Selling Product
          </p>
          <hr />

          <div className="grid grid-cols-4 gap-2 py-auto p-4 w-full">
            <img
              src="https://templates.iqonic.design/datum/html/assets/images/products/1.jpg"
              alt=""
            />
            <p className="font-bold col-span-2 mt-4">
              Rockerz Bluetooth Headset
            </p>
            <p className="font-bold mt-4">$1,056</p>
          </div>
          <hr />
          <div className="grid grid-cols-4 gap-2 py-auto p-2">
            <img
              src="https://templates.iqonic.design/datum/html/assets/images/products/2.jpg"
              alt=""
            />
            <p className="font-bold col-span-2 mt-4">Wifi Security Camera</p>
            <p className="font-bold mt-4">$1,799</p>
          </div>
          <hr />
          <div className="grid grid-cols-4 gap-2 py-auto p-2">
            <img
              src="https://templates.iqonic.design/datum/html/assets/images/products/13.jpg"
              alt=""
            />
            <p className="font-bold col-span-2 mt-4">Stone Bluetooth Speaker</p>
            <p className="font-bold mt-4">$1,056</p>
          </div>
          <hr />
          <div className="grid grid-cols-4 gap-2 py-auto p-2">
            <img
              src="https://templates.iqonic.design/datum/html/assets/images/products/4.jpg"
              alt=""
            />
            <p className="font-bold col-span-2 mt-4">Ryzen 5 Hexa Core 5600H</p>
            <p className="font-bold mt-4">$1,056</p>
          </div>
          {/* <hr className="" /> */}
        </div>
      </div>
      <div className="grid md:grid-cols-3 mt-6 gap-6 ">
        <div className="col-span-2  ">
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <div className="flex bg-[#3378ff] rounded-md gap-6 p-4">
                <img src="https://i.ibb.co/CVx8VvP/Capture.png" alt="" />
                <div>
                  <p className="text-xl font-bold ml-3 mt-3 text-left">
                    1,860 / <span>3k Target</span>
                  </p>
                  <p>Order In Period</p>
                </div>
              </div>
              <div>
                <div className="ml-auto mr-auto  m-2  overflow-hidden container mt-6 bg-white shadow-md p-2 mb-2">
                  <BarChart
                    width={460}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,

                      bottom: 5,
                    }}
                    barSize={20}
                  >
                    <XAxis
                      dataKey="name"
                      scale="point"
                      padding={{ left: 10, right: 10 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar
                      dataKey="users"
                      fill="#8884d8"
                      background={{ fill: "#eee" }}
                    />
                  </BarChart>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md md:row-span-1 text-left overflow-x-scroll rounded-md">
              <p className="p-6 justify-between flex text-2xl font-bold ">
                Upcoming Events
                <span className=" cursor-pointer"></span>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none ">
                      <span className="ml-3 hidden text-xl font-medium text-gray-700 lg:block">
                        <BiDotsHorizontalRounded></BiDotsHorizontalRounded>
                      </span>
                      {/* <BiChevronDownSquare
                        className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
                        aria-hidden="true"
                      /> */}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            // to="/dashboard/userProfile"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <p className="flex ">
                              <span className=" text-xl">
                                <FiEdit></FiEdit>
                              </span>{" "}
                              <span className="ml-4 ">Edit</span>
                            </p>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            // to="//dashboard/settings"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <p className="flex ">
                              <span className=" text-xl">
                                <GrView></GrView>
                              </span>{" "}
                              <span className="ml-4 ">View</span>
                            </p>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            // onClick={logout}
                            to="/login"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <p className="flex ">
                              <span className=" text-xl">
                                <AiFillDelete></AiFillDelete>
                              </span>{" "}
                              <span className="ml-4 ">Delete</span>
                            </p>
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </p>
              <hr />
              <div>
                <p className="justify-between flex p-5">
                  <span className="text-gray-300 md:ml-2 mt-1">
                    <SlCalender></SlCalender>
                  </span>{" "}
                  <span className="text-gray-500">30 JUN, </span> TUE Big
                  Billion Day Sale
                </p>
                <hr />
              </div>

              <div>
                <p className="justify-between flex p-5">
                  <span className="text-gray-300 md:ml-2 mt-1">
                    <SlCalender></SlCalender>
                  </span>{" "}
                  <span className="text-gray-500">30 JUN, </span> TUE Big
                  Billion Day Sale
                </p>
                <hr />
              </div>

              <div>
                <p className="justify-between flex p-5">
                  <span className="text-gray-300 md:ml-2 mt-1">
                    <SlCalender></SlCalender>
                  </span>{" "}
                  <span className="text-gray-500">30 JUN, </span> TUE Big
                  Billion Day Sale
                </p>
                <hr />
              </div>

              <div>
                <p className="justify-between flex p-5">
                  <span className="text-gray-300 md:ml-2 mt-1">
                    <SlCalender></SlCalender>
                  </span>{" "}
                  <span className="text-gray-500">30 JUN, </span> TUE Big
                  Billion Day SaleTUE
                </p>
                <hr />
              </div>

              <div>
                <p className="justify-between flex p-5">
                  <span className=" text-gray-300 md:ml-2 mt-1">
                    <SlCalender></SlCalender>
                  </span>{" "}
                  <span className="text-gray-500">30 JUN, </span> TUE Big
                  Billion Day Sale
                </p>
                <hr />
                <div className="grid grid-cols-3">
                  <p></p>
                  <p></p>
                  <p className="bg-[#778aae] rounded-md p-2 text-right  right-0  w-20 ml-5 mt-1">
                    {" "}
                    See All
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-6 bg-white shadow-md rounded-md">
          <p className="text-2xl font-bold mt-6">Popular Categories</p>
          <div>
            <PieChart width={300} height={350}>
              <Pie
                dataKey="users"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 mt-6 gap-6">
        {/* md:row-span-3 */}
        <div className=" md:col-span-2  bg-white shadow-md p-2">
          <div className="flex justify-between mt-2">
            <p className="text-2xl font-bold"> New Customer </p>

            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none ">
                  <span className="ml-3 mt-2 hidden text-xl font-medium text-gray-700 lg:block">
                    <BiDotsHorizontalRounded></BiDotsHorizontalRounded>
                  </span>
                  {/* <BiChevronDownSquare
              className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
              aria-hidden="true"
            /> */}
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        // to="/dashboard/userProfile"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <p className="flex ">
                          <span className=" text-xl">
                            <FiEdit></FiEdit>
                          </span>{" "}
                          <span className="ml-4 ">Edit</span>
                        </p>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        // to="//dashboard/settings"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <p className="flex ">
                          <span className=" text-xl">
                            <GrView></GrView>
                          </span>{" "}
                          <span className="ml-4 ">View</span>
                        </p>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        // onClick={logout}
                        to="/login"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <p className="flex ">
                          <span className=" text-xl">
                            <AiFillDelete></AiFillDelete>
                          </span>{" "}
                          <span className="ml-4 ">Delete</span>
                        </p>
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          
          </div>
          <Tebile></Tebile>
        </div>
        <div className="md:row-span-1 bg-white shadow-md">
          <p className="text-2xl font-bold mt-6">City Orders Statistics</p>

          <div>
          <iframe className="w-full" style={{height:'500px',borderRadius:'10px',borderColor:'black'}} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=485&amp;height=956&amp;hl=en&amp;q=dhanmondi&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div>



          {/* <iframe className="w-full" style={{height:'500px',borderRadius:'10px',borderColor:'black'}}
     src="https://maps.google.com/maps?q=Jamuna%20Future%20Park,%20Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
         
          
        </div>
      </div>
    </div>
  );
};

export default DashbordHome;
