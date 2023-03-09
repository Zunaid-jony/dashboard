import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [productGallery, setProductGallery] = useState([]);
  const getImageGallery = async (values) => {
    try {
      setLoading(true);
      await axios
        .get(
          `https://primeautomationapiapi.primeautomaticdoor.com/image`
        )
        .then(function (res) {
          setLoading(false);
          setGallery(res.data);
          console.log(res?.data);
        })
        .catch(function (error) {
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
    }
  };
  const getProductImageGallery = async (values) => {
    try {
      setLoading(true);
      await axios
        .get(
          `https://primeautomationapiapi.primeautomaticdoor.com/product`
        )
        .then(function (res) {
          setLoading(false);
          setProductGallery(res.data);
          console.log(res?.data);
        })
        .catch(function (error) {
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getImageGallery();
    getProductImageGallery();
  }, []);
  return (
    <div>
      <section class="overflow-hidden text-gray-700">
        <div class="container px-4 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex">
            <p className="text-left mb-2">
            Media Library
            </p>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 -mt-2 ml-2 rounded">
   <Link to="/newAdd"> Add New</Link> 
</button>
          </div>
          <div className="border-2 border-gray-900 flex justify-between p-2">
            {/* .......... */}
            <div className="flex ">
              <div class="col-span-6 sm:col-span-3 mr-2">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700"
                ></label>
                <select
                  id="Transmission"
                  name="Transmission"
                  autocomplete="country-name"
                  class=" block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option Value="" disabled selected>
                    All dates
                  </option>
                  <option value="Manual">January 2023</option>
                </select>
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700"
                ></label>
                <select
                  id="Transmission"
                  name="Transmission"
                  autocomplete="country-name"
                  class=" block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option Value="" disabled selected>
                    All media items
                  </option>
                  <option value="Manual">Video</option>
                  <option value="Manual">Images</option>
                  <option value="Manual">Audio</option>
                </select>
              </div>

              {/* ......... */}
              <div>
                <p
                  className="border-2 border-gray-100 py-1.5 text-sm ml-2 pl-2
                   pr-2          "
                >
                  {" "}
                  Bulk Select
                </p>
              </div>
            </div>

            <form>
              <label
                for="default-search"
                class=" text-sm font-medium text-gray-900 sr-only dark:text-white"
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
                  class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search "
                />
                <button
                  type="submit"
                  class="text-white absolute right-2.5 -mt-9 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>

            {/* ...... */}
          </div>
          <div className="font-bold text-xl text-cyan-600">Image Gallery</div>
          <br />

          <div className="grid grid-cols-4 gap-4 mt-2">
            {gallery.map((item) => (
              <div className="col-span-1 box-border h-56 w-56  border-2">
                <img
                  alt="gallery"
                  className="object-fill h-48 w-96"
                  src={item?.image}
                />
              </div>
            ))}
          </div>
          <div className="font-bold text-xl text-cyan-600 mt-5">
            Product Gallery
          </div>
          <br />
          <div className="grid grid-cols-4 gap-4 mt-2">
            {productGallery.map((item) => (
              <div className="col-span-1 box-border h-56 w-56  border-2">
                <img
                  alt="gallery"
                  className="object-fill h-48 w-96"
                  src={item?.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
