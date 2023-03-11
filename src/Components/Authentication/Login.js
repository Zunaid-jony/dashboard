
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { useFormik } from "formik";
import axios from "axios";
import { CommonButton } from "../Button/Button";
import { setUserSession } from "./loginStorage";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleSubmit(values);
    },
    enableReinitialize: true,
    validateOnChange: false,
  });
  const handleSubmit = async (values) => {
    setLoading(true);
    const allData = {
      ...values,
    };
    try {
      const response = await axios.post("https://primeautomationapiapi.primeautomaticdoor.com/login", allData);
      if (response.status === 200) {
        setLoading(false);
        setUserSession(
          response.data.token,
          response.data.email,
          response.data.firstName,
          response.data.lastName,
          response.data.password,
          response.data.id
        );

        localStorage.setItem("auth",true)
        navigate("/");
        toast.success('login successfully.');
      }
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-auto ">
      <div className="flex w-full mt-24 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800 lg:max-w-3xl m-3">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <img
            className="w-full h-16 ml-auto mr-auto mb-4"
            src="https://i.ibb.co/zS0YVkF/pri-removebg-preview.png"
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

       

          <form onSubmit={formik.handleSubmit}>
            <div className="mt-4 text-left">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="email"
                placeholder="Inter Your Email"
              >
                Email Address
              </label>
              <input
                id="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                // value={data.email}
                required
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  for="password"
                  placeholder="Inter Your Password"
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
              />
            </div>

            <div className="mt-2 ">
              <CommonButton
                className="p-mr-2 p-button-raised p-button-secondary"
                title="Save"
                disabled={false}
                label="Login"
                type="submit"
                icon="pi pi-save"
                color="p-button-raised p-button-success"
                loading={loading}
              />
            </div>
          </form>

          {/* FORM SESH  */}

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to="/Registration"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign up
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
        <div className="hidden bg-cover lg:block lg:w-1/2 login-url bg-blue-500 "></div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
