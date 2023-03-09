import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas/index";
import axios from "axios";
import { CommonButton } from "../Button/Button";

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    // validationSchema: signUpSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleSubmit(values);
    },
    enableReinitialize: true,
    validateOnChange: false,
  });
  const handleSubmit = async (values) => {
    console.log("hit");
    setLoading(true);
    const allData = {
      ...values,
    };
    try {
      await axios.post(
        "https://primeautomationapiapi.primeautomaticdoor.com/register",
        allData
      );
      // toast.success("Product added successfully")
      localStorage.setItem("auth",true)
      navigate("/");
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex w-full mt-12 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800 lg:max-w-3xl m-3">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          {/* <img
            className="w-14 h-14 ml-auto mr-auto mb-4"
            src="https://templates.iqonic.design/datum/html/assets/images/logo-dark.png"
            alt=""
          /> */}
          <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
            Sign Up
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

          <form onSubmit={formik.handleSubmit}>
            <div className="mt-4 text-left">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="firstName"
              >
                User Name
              </label>
              <input
                id="firstName"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                required
                placeholder="Inter Your First Name"
              />
            </div>

            <div className="mt-4 text-left">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="lastName"
              >
                User Full Name
              </label>
              <input
                id="lastName"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                // value={data.lastName}
                required
                placeholder="Inter Your Last Name"
              />
            </div>
            <div className="mt-4 text-left">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="email"
              >
                Email
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                // value={data.email}
                required
                placeholder="Enter Your Email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  for="password"
                >
                  Password
                </label>
              </div>

              <input
                id="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                // value={data.password}
                required
                placeholder="Password"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  for="confirm_password"
                >
                  confirm password
                </label>
              </div>

              <input
                id="confirm_password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="confirm_password"
                onChange={formik.handleChange}
                value={formik.values.confirm_password}
                // value={data.password}
                required
                placeholder=" Confirm Password"
              />
            </div>

            <div className="mt-2 ">
              <CommonButton
                className="p-mr-2 p-button-raised p-button-secondary"
                title="Save"
                disabled={false}
                label="SignUp"
                type="Sign Up"
                icon="pi pi-save"
                color="p-button-raised p-button-success"
                loading={loading}
              />
            </div>
          </form>

          {/* form sesh  */}

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign In
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
        <div className="hidden bg-cover lg:block lg:w-1/2 login-url bg-blue-500  items-center">
          <div className="text-center justify-center font-bold text-2xl text-white py-12">
            {/* Sign up with valid information */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
