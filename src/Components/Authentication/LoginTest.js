import React, { useEffect } from "react"

import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { FaFacebookF } from "react-icons/fa"
import { GrGooglePlus } from "react-icons/gr"
import { GrLinkedinOption } from "react-icons/gr"
import { useState } from "react"

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const validateLogin = () => {
    // এই ফাংশনে লগইন ভ্যালিডেশন কোড লিখা হবে
    if (email === "jony@gmail.com" && password === "jony12345") {
      alert("লগইন সফল হয়েছে")
    } else {
      alert("লগইন ব্যর্থ হয়েছে")
    }
    navigate("/")
  }

  return (
    <div className="mt-auto ">
      <div className="flex w-full mt-24 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800 lg:max-w-3xl m-3">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
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
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  Password
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mt-8">
              <button
                type="submit"
                onClick={validateLogin}
                className=" px-14 rounded-full py-2 tracking-wide text-white transition-colors duration-300 transform   focus:outline-none focus:bg-gray-600 bg-blue-500 hover:bg-sky-600 font-bold"
              >
                Login
              </button>
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
    </div>
  )
}

export default Login