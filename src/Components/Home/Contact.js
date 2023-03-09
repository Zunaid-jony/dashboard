import React, { useState } from "react";
import { Button } from "primereact/button";

import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Contact = () => {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const onLoadingClick1 = () => {
    setLoading1(true);

    setTimeout(() => {
      setLoading1(false);
    }, 2000);
  };

  const onLoadingClick2 = () => {
    setLoading2(true);

    setTimeout(() => {
      setLoading2(false);
    }, 2000);
  };
  return (
    <div className="bg-white">
      <br />
      <div className="grid md:grid-cols-2 container  ml-auto mr-auto   ">
        <dir>
          <img
            src="http://bizix.premiumthemes.in/wp-content/uploads/2020/02/home1-contact-pic.jpg"
            alt=""
          />
        </dir>
        <div className="md:-ml-10 mt-24 bg-white shadow-xl md:mr-6 md:mb-28 rounded-md m-1">
          <p className="text-3xl font-bold p-4 mt-10">
            Contact Us Today and Get a Free Online Quote Now!
          </p>

          <form className="p-4 text-left">
            <div class="grid md:grid-cols-2 md:gap-6 mt-4">
              <div class="relative z-0 mb-6 w-full group">
                <AiFillMail className="pointer-events-none text-[#f04f25] text-read-700 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-0 text-right" />
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#f04f25] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <AiFillMail className="pointer-events-none text-[#f04f25] text-read-700 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-0 text-right" />
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#f04f25] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_company"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company (Ex. Google)
                </label>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6 mt-4">
              <div class="relative z-0 mb-6 w-full group">
                <AiFillMail className="pointer-events-none text-[#f04f25] text-read-700 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-0 text-right" />
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#f04f25] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <AiFillMail className="pointer-events-none text-[#f04f25] text-read-700 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-0 text-right" />
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#f04f25] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_company"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company (Ex. Google)
                </label>
              </div>
            </div>

            <div class="relative z-0 mb-6 w-full group mt-4">
              <AiFillMail className="pointer-events-none text-[#f04f25] text-read-700 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-0 text-right" />
              <textarea
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-6 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="card">
          <Button label="Submit" loading={loading2} onClick={onLoadingClick2} />
        </div>
          </form>
        </div>
      </div>
      <br />

    
      
      
    </div>
  );
};

export default Contact;
