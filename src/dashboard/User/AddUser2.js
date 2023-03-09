import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";

const AddUser2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-auto ">
      <div className="flex w-full mt-24 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800 lg:max-w-3xl m-3">
        <div className="w-full px-6 py-8 md:px-8 lg:w-3/4 ml-auto mr-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
            Add User
          </h2>

          {/* form start */}

          <form>
            <div className="mt-4 text-left">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="LoggingEmailAddress"
                placeholder="Inter Your Email"
              >
               Password
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="email"
                // value={data.email}
                required
              />
            </div>
            <div className="mt-4 text-left">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="LoggingEmailAddress"
                placeholder="Inter Your Email"
              >
               Email
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="email"
                // value={data.email}
                required
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  for="loggingPassword"
                  placeholder="Inter Your Password"
                >
                  First Name
                </label>
                {/* <Link
                  to="/"
                  className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Forget Password?
                </Link> */}
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="password"
                // value={data.password}
                required
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  for="loggingPassword"
                  placeholder="Inter Your Password"
                >
                  Last Name
                </label>
                {/* <Link
                  to="/"
                  className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Forget Password?
                </Link> */}
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="password"
                // value={data.password}
                required
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  for="loggingPassword"
                  placeholder="Inter Your Password"
                >
                  First Name
                </label>
                {/* <Link
                  to="/"
                  className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Forget Password?
                </Link> */}
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="password"
                // value={data.password}
                required
              />
            </div>


            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  for="loggingPassword"
                  placeholder="Inter Your Password"
                >
                  Last Name
                </label>
                {/* <Link
                  to="/"
                  className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Forget Password?
                </Link> */}
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="password"
                // value={data.password}
                required
              />
            </div>

            <div className="mt-8">
             <Link to="/">
             <button
                type="submit"
                className=" px-14 rounded-full py-2 tracking-wide text-white transition-colors duration-300 transform   focus:outline-none focus:bg-gray-600 bg-blue-500 hover:bg-sky-600 font-bold"
              >
                Add User
              </button>
             </Link>
            </div>
          </form>

          {/* FORM SESH  */}

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser2;
