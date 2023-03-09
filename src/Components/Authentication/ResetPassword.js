import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";

const ResetPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-auto ">
      <>
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/3 bg-white shadow-xl ml-auto mr-auto mt-14">
          <img
            className="w-14 h-14 ml-auto mr-auto mb-4"
            src="https://templates.iqonic.design/datum/html/assets/images/logo-dark.png"
            alt=""
          />
          <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
            Sign in
          </h2>

          <div className="flex ml-auto mr-auto cursor-pointer gap-2 justify-center mt-4">
            <i className="bg-white rounded-full p-2 border border-sky-600  hover:text-white hover:bg-sky-600 font-bold">
              {" "}
              <FaFacebookF></FaFacebookF>{" "}
            </i>
            <i className=" bg-white rounded-full p-2 border border-sky-600 hover:text-white hover:bg-sky-600 font-bold">
              <GrGooglePlus></GrGooglePlus>{" "}
            </i>
            <i className="bg-white rounded-full p-2 border border-sky-600  hover:text-white hover:bg-sky-600 font-bold">
              {" "}
              <GrLinkedinOption></GrLinkedinOption>{" "}
            </i>
          </div>

          {/* form start */}

          <form>
            <div className="mt-4 text-left">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="LoggingEmailAddress"
                placeholder="Inter Your Email"
              >
           Reset Password
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
                // value={data.email}
                required
              />
            </div>

           

            <div className="mt-8">
              <button
                type="submit"
                className=" px-14 rounded-md w-full py-2 tracking-wide text-white transition-colors duration-300 transform   focus:outline-none focus:bg-gray-600 bg-blue-500 hover:bg-sky-600 font-bold"
              >
                Reset Password
              </button>
            </div>
          </form>

        

          
        </div>
        
      </>
    </div>
  );
};

export default ResetPassword;
