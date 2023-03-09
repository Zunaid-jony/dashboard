import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";

const AddOrder = () => {
  return (
    <div>
      <div className="flex   justify-between text-gray-600 md:px-6 mt-10">
        <p className="text-2xl font-bold">Add New Customer </p>
        <Link to="/dashboard/product">
          <p className="bg-[#5e23e7] p-2 rounded-md w-20 flex text-white">
            {" "}
            <span className="mr-2 mt-1">
              <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>
            </span>{" "}
            Back
          </p>
        </Link>
      </div>
      {/* add user body */}
      <div className="grid md:grid-cols-2 gap-4 mt-10 bg-white  shadow-md p-2">
        <div className="col-span-2  ">
          <div className="grid md:grid-cols-2 gap-4 mr-2">
            <div>
              <p className="text-left font-bold mb-6 mt-4">Customer Details</p>
              <div>
                <label
                  for="first_name"
                  className="text-left font-bold block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                >
                  CUSTOMER
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Full Name"
                  required
                />
              </div>

              <div className="mt-1">
                <label
                  for="first_name"
                  className="text-left  block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  PHONE
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="BIRTH DAY"
                  required
                />
              </div>

              <div className="mt-1">
                <label
                  for="first_name"
                  className="text-left  block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="EMAIL"
                  required
                />
              </div>

              <div>
                <label
                  for="first_name"
                  className="text-left  block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ADDRESS
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ADDRESS"
                  required
                />
              </div>
            </div>
            {/* secend part */}

            <div>
              <p className="text-left font-bold mb-6 mt-4">Order Details</p>

              {/* <div class="col-span-6 sm:col-span-3 mt-1">
                <label
                  for="first_name"
                  className="text-left  block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  COMPANY
                </label>
                <select
                  id="make"
                  name="make"
                  autocomplete="country-name"
                  class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm p-3"
                >
                  <option value="" disabled selected>
                    Select country Name
                  </option>
                  <option value="BMW">ICHCHAPURON</option>
                  <option value="Audi">DAMIGARI</option>
                  <option value="Ford">MYBIDS</option>
                  <option value="Kia">country</option>
                  <option value="Chevrolet">country</option>
                </select>

                <span className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1"></span>
              </div> */}

              <div className="grid md:grid-cols-2 gap-2">
                <div className="mt-1">
                  <label
                    for="first_name"
                    className="text-left  block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="EMAIL"
                    required
                  />
                </div>
                <div className="mt-1">
                  <label
                    for="first_name"
                    className="text-left  block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="EMAIL"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  for="first_name"
                  className="text-left  block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                >
                  ADDRESS
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ADDRESS"
                  required
                />
              </div>
              <div>
                <label
                  for="first_name"
                  className="text-left  block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ADDRESS
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ADDRESS"
                  required
                />
              </div>
              <div>
                <label
                  for="first_name"
                  className="text-left  block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ADDRESS
                </label>
                <textarea
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ADDRESS"
                  required
                />
              </div>

              <div></div>
            </div>
          </div>

          {/* <div className="grid grid-cols-5 mt-8 mt-10 mr-4">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div> */}
          <br />
        </div>
      </div>

      <div className="bg-white shadow-md text-left p-2 mt-10">
        <div className="mt-8 grid grid-cols-2 ">
          <div>
            <p className="text-xl">Order Items</p>
            <form className="mr-2 mt-3">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  <p className="flex"> Product</p>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  <p className="flex">
                    Quantity
                    <span className=" ml-2 cursor-pointer">
                      <Link to="/dashboard/Customer"></Link>
                    </span>
                  </p>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  <p className="flex">
                    {" "}
                    Price
                    <span className=" ml-2 cursor-pointer">
                      <Link to="/dashboard/Customer"></Link>
                    </span>
                  </p>
                </th>

                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://templates.iqonic.design/datum/html/assets/images/products/12.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">
                        <p>FivePlus Nord 5G</p>
                      </div>
                      <div className="text-gray-500">
                        <p>(12GB RAM, 256GB Storage)</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div className="text-gray-500 flex text-xl">
                    <span className="mr-2 ">+</span>{" "}
                    <span className="mr-2">1</span> <span>-</span>
                  </div>
                </td>

                <td className="whitespace-nowrap px-3 py-4 text-sm ">
                  <span className="inline-flex  px-2 text-xs font-semibold leading-5 text-green-800">
                    $2,399.99
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {/* {person.phone} */}
                </td>

                <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium sm:pr-6">
                  <Link to="#" className="text-[#e23a3a] hover:text-indigo-900">
                    <AiTwotoneDelete></AiTwotoneDelete>
                    <span className="sr-only">,</span>
                  </Link>
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://templates.iqonic.design/datum/html/assets/images/products/1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">
                        <p>FivePlus Nord 5G</p>
                      </div>
                      <div className="text-gray-500">
                        <p>(12GB RAM, 256GB Storage)</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div className="text-gray-500 flex text-xl">
                    <span className="mr-2 ">+</span>{" "}
                    <span className="mr-2">1</span> <span>-</span>
                  </div>
                </td>

                <td className="whitespace-nowrap px-3 py-4 text-sm ">
                  <span className="inline-flex  px-2 text-xs font-semibold leading-5 text-green-800">
                    $24,399.99
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {/* {person.phone} */}
                </td>

                <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium sm:pr-6">
                  <Link to="#" className="text-[#e23a3a] hover:text-indigo-900">
                    <AiTwotoneDelete></AiTwotoneDelete>
                    <span className="sr-only">,</span>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <hr />

          <div className="grid grid-cols-3 mt-2 p-4">
            <p></p>
            <p></p>
            <div className="flex right-0">
              <p className="mt-2">Total: $2,474.97</p>
              <p className="py-2 px-2 bg-[#5e23e7] text-center  rounded-md text-white ml-4">
                ADD Product
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
