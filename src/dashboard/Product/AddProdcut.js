import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AddProdcut = () => {
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
              <div>
                <label
                  for="first_name"
                  className="text-left font-bold block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  FULL NAME
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
                  BIRTH DAY
                </label>
                <input
                  type="date"
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

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first_name"
                  className="text-left  block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-1"
                >
                  COMPANY
                </label>
                <select
                  id="make"
                  name="make"
                  autocomplete="country-name"
                  class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm p-2"
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
              <div className="flex mt-10 ml-2 ">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <p className="ml-2">MAIL</p>
                <div className="flex items-center ml-2">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <p className="ml-2">Female</p>
                <div className="flex items-center ml-2">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <p className="ml-2">Other</p>
              </div>

              <div class="col-span-6 sm:col-span-3 mt-1">
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
                <input
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
          <div className="mr-2">
            <label
              for="about"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Description
            </label>
            <div class="mt-1">
              <textarea
                id="description"
                type="text"
                name="description"
                rows="3"
                class=" border border-gray-300 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border border-gray-300 border border-gray-300 mr-2"
                placeholder="description ..."
                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm "
              />

              <span className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1"></span>
            </div>
          </div>

          <div className="grid grid-cols-5 mt-8 mt-10 mr-4">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <br />
        </div>
      </div>

      <div></div>

      <div>
        <div className="bg-white shadow-md mt-16 round-md">
         
          <div className="mt-5">
            <label className="mt-1 flex justify-center px-6 py-28 border-2">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <div className="flex text-sm text-gray-700">
                  <label
                    htmlFor="images-upload"
                    className="relative cursor-pointer rounded-md font-semibold text-blue-600 hover:text-blue-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload multiple photos</span>
                    <input
                      // onChange={handleFiles}
                      type="file"
                      multiple
                      name="images-upload"
                      id="images-upload"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1 font-semibold">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-600">
                  Each pictures size minimum 20KB
                </p>
                <p className="text-xs text-gray-600">
                  PNG, JPG, GIF up to 500MB
                </p>
              </div>
            </label>
          </div>

          <div className="grid grid-cols-3 mt-2 p-4">
            <p></p>
            <p></p>
            <p className="py-2 px-2 bg-[#5e23e7] text-center  rounded-md text-white ">
              ADD Product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProdcut;
