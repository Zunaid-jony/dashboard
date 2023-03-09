import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";

const people = [
  {
    name: "Christian Bale",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    phone: "01627392810",
    role: "Member",
    image:
      "https://templates.iqonic.design/datum/html/assets/images/user/1.jpg",
  },
  {
    name: "Matt Damon",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    phone: "01627392810",
    role: "Member",
    image:
      "https://templates.iqonic.design/datum/html/assets/images/user/2.jpg",
  },
  {
    name: "Christian Bale",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    phone: "01627392810",
    role: "Member",
    image:
      "https://templates.iqonic.design/datum/html/assets/images/user/1.jpg",
  },
  {
    name: "Matt Damon",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    phone: "01627392810",
    role: "Member",
    image:
      "https://templates.iqonic.design/datum/html/assets/images/user/2.jpg",
  },
  {
    name: "Christian Bale",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    phone: "01627392810",
    role: "Member",
    image:
      "https://templates.iqonic.design/datum/html/assets/images/user/1.jpg",
  },
  {
    name: "Matt Damon",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    phone: "01627392810",
    role: "Member",
    image:
      "https://templates.iqonic.design/datum/html/assets/images/user/2.jpg",
  },
  {
    name: "Christian Bale",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    phone: "01627392810",
    role: "Member",
    image:
      "https://templates.iqonic.design/datum/html/assets/images/user/1.jpg",
  },
  {
    name: "Matt Damon",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    phone: "01627392810",
    role: "Member",
    image:
      "https://templates.iqonic.design/datum/html/assets/images/user/2.jpg",
  },
  {
    name: "Christian Bale",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    phone: "01627392810",
    role: "Member",
    image:
      "https://templates.iqonic.design/datum/html/assets/images/user/1.jpg",
  },
  {
    name: "Matt Damon",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    phone: "01627392810",
    role: "Member",
    image:
      "https://templates.iqonic.design/datum/html/assets/images/user/2.jpg",
  },
  // More people...
];

const Order = () => {
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8 mt-10">
        <div className="sm:flex sm:items-center  justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Customer</h1>

          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none flex">
            <form className="mr-2">
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
                  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
              </div>
            </form>
            <Link to="/dashboard/addOrder">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto py-4"
              >
                Add Order
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col snap-x">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        <p className="flex">
                          {" "}
                          Name{" "}
                          <span className=" ml-2 cursor-pointer">
                            <Link  to="/dashboard/Customer"> 
                           
                            <BsArrowDownUp></BsArrowDownUp>
                            
                            </Link>
                          
                          </span>
                        </p>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        <p className="flex">
                          Email{" "}
                          <span className=" ml-2 cursor-pointer">
                          <Link  to="/dashboard/Customer"> 
                           
                           <BsArrowDownUp></BsArrowDownUp>
                           
                           </Link>
                          </span>
                        </p>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        <p className="flex">
                          {" "}
                          Location{" "}
                          <span className=" ml-2 cursor-pointer">
                          <Link  to="/dashboard/Customer"> 
                           
                           <BsArrowDownUp></BsArrowDownUp>
                           
                           </Link>
                           
                          </span>
                        </p>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        <p className="flex">
                          {" "}
                          Phone{" "}
                          <span className=" ml-2 cursor-pointer">
                            
                          <Link  to="/dashboard/Customer"> 
                           
                           <BsArrowDownUp></BsArrowDownUp>
                           
                           </Link>
                          </span>
                        </p>
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td>
                          <div className="flex items-center ml-6">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                {person.name}
                              </div>
                              <div className="text-gray-500">{person.role}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-500">{person.email}</div>
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.phone}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link
                            to="/"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <FiEdit></FiEdit>{" "}
                            <span className="sr-only">, {person.name}</span>
                          </Link>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link
                            to="/"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <GrView></GrView>{" "}
                            <span className="sr-only">, {person.name}</span>
                          </Link>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link
                            to="#"
                            className="text-[#e23a3a] hover:text-indigo-900"
                          >
                            <AiTwotoneDelete></AiTwotoneDelete>
                            <span className="sr-only">, {person.name}</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pagination */}

      <div class="flex flex-col items-center justify-between">
        <div className="left-0">
          <span class="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span class="font-semibold text-gray-900 dark:text-white">1</span>{" "}
            to{" "}
            <span class="font-semibold text-gray-900 dark:text-white">10</span>{" "}
            of{" "}
            <span class="font-semibold text-gray-900 dark:text-white">100</span>{" "}
            Entries
          </span>
        </div>
        <div class="inline-flex mt-2 xs:mt-0">
          <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg
              aria-hidden="true"
              class="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Prev
          </button>
          <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
            <svg
              aria-hidden="true"
              class="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
