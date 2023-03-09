import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";

const AddUser = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://primeautomationapiapi.primeautomaticdoor.com/register";
      const { data: res } = await axios.post(url, data);
      navigate("/dashboard/userRoll");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="flex w-full mt-12 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800 lg:max-w-3xl m-3">
        <div className="w-full px-6 py-8 md:px-8 ">
          <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
            Add User
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mt-4 text-left">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="LoggingEmailAddress"
              >
                Fast Name
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="name"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                placeholder="Inter Your Fast Name"
              />
            </div>

            <div className="mt-4 text-left">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="LoggingEmailAddress"
              >
                Last Name
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="name"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
                placeholder="Inter Your Last Name"
              />
            </div>
            <div className="mt-4 text-left">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="LoggingEmailAddress"
              >
                Email
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                placeholder="Enter Your Email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  for="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                placeholder="Password"
              />
            </div>
            {/* {error && <div >{error}</div>} */}

            {/* Error messeage show */}
            {/* Error messeage show */}
            {/* Error messeage show */}
            {error && (
              <input
                className="mt-5 block w-full px-4 py-2  bg-red-300 text-white placeholder-white-500 rounded-md  "
                type="password"
                name="text"
                placeholder={error}
              />
            )}
            {/*  */}
            {/*  */}

            <div className="mt-8">
              <button
                type="submit"
                className=" px-14 rounded-full py-2 tracking-wide text-white transition-colors duration-300 transform   focus:outline-none focus:bg-gray-600 bg-blue-500 hover:bg-sky-600 font-bold"
              >
                Add 
              </button>
            </div>
          </form>

          {/* form sesh  */}

         
        </div>
      </div>
    </div>
  );
};

export default AddUser;
