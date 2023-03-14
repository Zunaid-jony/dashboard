import React from "react";
import { TabView, TabPanel } from "primereact/tabview";


import { AiFillStar } from "react-icons/ai";

const PreviewHeader = ({ product1 }) => {
  return (
    <div className="container ml-auto mr-auto">
      <div className="tabview-demo text-left">
        <div className="card">
          <TabView>
            <TabPanel header="Description">
              <div className="w-full container overflow-hidden">
              <p>{product1?.description}</p>
              <p className="mt-4"> {product1?.shortDescription}</p>

              </div>
             
              <br />
            </TabPanel>
            <TabPanel header="Reviews">
              <div className="grid grid-cols-2">
                <div class="mt-10">
                  <div class="flex  w-full">
                    <div class="flex flex-col items-start justify-between w-3/5 ">
                      <div class="mb-3">
                        <p>Average Rating</p>
                        <p className="mt-4 text-5xl font-bold text-[#39c539]">5.00</p>

                        <p className="text-[#fffc3f] flex text-2xl">
                          <AiFillStar></AiFillStar>
                          <AiFillStar></AiFillStar>
                          <AiFillStar></AiFillStar>
                          <AiFillStar></AiFillStar>
                          <AiFillStar></AiFillStar>

                        </p>
                      </div>

                      <div class="flex flex-row items-center justify-between w-full mb-1 text-sm">
                        <span class="text-indigo-800">5 star</span>
                        <span class="flex-grow flex-shrink-0 h-3 mx-2 align-middle border border-gray-400 rounded-lg">
                          <span class="block w-full h-full bg-[#39c539] rounded-lg"></span>
                        </span>
                        <span class="text-gray-600">80%</span>
                      </div>
                      <div class="flex flex-row items-center justify-between w-full mb-1 text-sm">
                        <span class="text-indigo-800">4 star</span>
                        <span class="flex-grow flex-shrink-0 h-3 mx-2 align-middle border border-gray-400 rounded-lg">
                          <span class="block w-2/3 h-full bg-[#39c539] rounded-lg"></span>
                        </span>
                        <span class="text-gray-600">63%</span>
                      </div>
                      <div class="flex flex-row items-center justify-between w-full mb-1 text-sm">
                        <span class="text-indigo-800">3 star</span>
                        <span class="flex-grow flex-shrink-0 h-3 mx-2 align-middle border border-gray-400 rounded-lg">
                          <span class="block w-1/3 h-full bg-[#39c539] rounded-lg"></span>
                        </span>
                        <span class="text-gray-600">33%</span>
                      </div>
                      <div class="flex flex-row items-center justify-between w-full mb-1 text-sm">
                        <span class="text-indigo-800">2 star</span>
                        <span class="flex-grow flex-shrink-0 h-3 mx-2 align-middle border border-gray-400 rounded-lg">
                          <span class="block w-1/12 h-full bg-[#39c539] rounded-lg"></span>
                        </span>
                        <span class="text-gray-600">10%</span>
                      </div>
                      <div class="flex flex-row items-center justify-between w-full mb-1 text-sm">
                        <span class="text-indigo-800">1 star</span>
                        <span class="flex-grow flex-shrink-0 h-3 mx-2 align-middle border border-gray-400 rounded-lg">
                          <span class="block w-1/6 h-full bg-[#39c539] rounded-lg"></span>
                        </span>
                        <span class="text-gray-600">16%</span>
                      </div>

                     

                    
                    </div>
                  </div>
                </div>

                <div class="w-full  px-4">
                  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                    <div class="flex-auto p-5 lg:p-10">
                      <h4 class="text-xl mb-4 text-black font-semibold">
                      ADD A REVIEW
                      </h4>
                      <h4 class=" mb-4  ">
                      Your email address will not be published. Required fields are marked *
                      </h4>
                      <div className="flex">
                        <p className="mr-4">Your rating of this product</p>
                        <p className="text-[#fffc3f] flex text-xl ml-10">
                          <AiFillStar className="ml-4"></AiFillStar>
                          <AiFillStar></AiFillStar>
                          <AiFillStar></AiFillStar>
                          <AiFillStar></AiFillStar>
                          <AiFillStar></AiFillStar>

                        </p>
                      </div>
                      <form id="feedbackForm" action="" method="">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            class="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                            placeholder=" "
                            required
                          />
                        </div>
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="message"
                          >
                            Message
                          </label>
                          <textarea
                            maxlength="300"
                            name="feedback"
                            id="feedback"
                            rows="4"
                            cols="80"
                            class="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                            placeholder=""
                            required
                          ></textarea>
                        </div>
                        <div class="  mt-6">
                          <button
                            id="feedbackBtn"
                            className=" bg-yellow-300 text-black   active:bg-yellow-400 text-sm font-bold uppercase px-10 py-3 rounded shadow hover:shadow-lg outline-none "
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="inline-block relative">
                    <div class="relative w-16 h-16 rounded-full overflow-hidden">
                      <img
                        class="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                        src="https://picsum.photos/id/646/200/200"
                        alt="Profile picture"
                      />
                      <div class="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                    </div>
                    <svg
                      class="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-6">
                  <p class="flex items-baseline">
                    <span class="text-gray-600 font-bold">Mary T.</span>
                    <span class="ml-2 text-green-600 text-xs">
                      Verified Buyer
                    </span>
                  </p>
                  <div class="flex items-center mt-1">
                    <svg
                      class="w-4 h-4 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-4 h-4 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-4 h-4 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-4 h-4 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-4 h-4 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                  <div class="flex items-center mt-4 text-gray-600">
                    <div class="flex items-center">
                      <span class="text-sm">Product Quality</span>
                      <div class="flex items-center ml-2">
                        <svg
                          class="w-3 h-3 fill-current text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          class="w-3 h-3 fill-current text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          class="w-3 h-3 fill-current text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          class="w-3 h-3 fill-current text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          class="w-3 h-3 fill-current text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      </div>
                    </div>
                    <div class="flex items-center ml-4">
                      <span class="text-sm">Purchasing Experience</span>
                      <div class="flex items-center ml-2">
                        <svg
                          class="w-3 h-3 fill-current text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          class="w-3 h-3 fill-current text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          class="w-3 h-3 fill-current text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          class="w-3 h-3 fill-current text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          class="w-3 h-3 fill-current text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <span class="font-bold">Sapien consequat eleifend!</span>
                    <p class="mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div class="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                    <button class="flex items-center">
                      <svg
                        class="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" />
                      </svg>
                      <span class="ml-2">Share</span>
                    </button>
                    <div class="flex items-center">
                      <span>Was this review helplful?</span>
                      <button class="flex items-center ml-6">
                        <svg
                          class="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                        </svg>
                        <span class="ml-2">56</span>
                      </button>
                      <button class="flex items-center ml-4">
                        <svg
                          class="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                        </svg>
                        <span class="ml-2">10</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Video">
             <div>
             <section className="py-6 dark:bg-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?1" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?2" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?3" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?4" />
		</div>
	</div>
</section>
<section className="py-6 dark:bg-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?1" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?2" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?3" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?4" />
		</div>
	</div>
</section>



             </div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
};

export default PreviewHeader;
