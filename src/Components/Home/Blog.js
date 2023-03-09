import React from "react";
import './Blog.css'

const Blog = () => {
  return (
    <div className="container ml-auto mr-auto mb-10">
      <div className="mt-16 mb-4 text-left ml-auto mr-auto border-l-4 border-[#f04f25] ">
        <div className="ml-6">
          <p className="text-xl"> Our Case Study</p>
          <p className="text-4xl font-bold">Recent Blog Posts</p>
        </div>
      </div>
      {/* gird */}
      <div className="grid md:grid-cols-3 ml-auto mr-auto gap-12 mt-10 ">
        <div className="md:ml-24">
          <div className="bg-white shadow-md p-3 hover:bg-[#f04f25] hover:text-white hover:border-white">
            <p className="text-2xl font-bold mt-2">Business</p>
            <p className="text-2xl font-bold">Accounting</p>
            <p className="text-2xl font-bold">Management &</p>
            <p className=" ml-auto mr-auto">Consultancy</p>
            <p className="border-b-2 border-[#f04f25] hover:border-white w-10 ml-auto mr-auto"></p>
            <p className="text-xl font-bold mb-2">JANUARY 1,2023</p>
          </div>
          <p className="mt-3 p-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            nobis quo sequi tempora ex consequuntur aut quisquam necessitatibus
            temporibus facere!
          </p>
        </div>
        <div className="col-span-2 mr-24">
          <div className="grid md:grid-cols-2 gap-8">
            <div className=" relative group  group-opacity-100">
              <div className="card-zoom">
                <img
                  className=" card-zoom-image"
                  src="https://aedit.wpengine.com/wp-content/uploads/2019/01/blog-2-1.jpg"
                  alt=""
                />
              </div>

              <div className=" -mt-32">
                <button
                  className="bg-white shadow-md p-3 hover:bg-[#f04f25] hover:text-white
               hover:border-white m-6 py-10 px-16 "
                >
                  <p className="text-2xl font-bold mt-2">Business</p>
                  <p className="text-2xl font-bold">Accounting</p>
                  <p className="text-2xl font-bold">Management &</p>
                  <p className=" ml-auto mr-auto text-2xl font-bold mb-1">
                    Consultancy
                  </p>
                  <p className="border-b-2 border-[#f04f25] hover:border-white w-10 ml-auto mr-auto"></p>
                  <p className=" font-bold mb-2 mt-2">JANUARY 1,2023</p>
                </button>


                <div className=" p-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin tincidunt nunc lorem, nec faucibus mi facilisis eget....
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://aedit.wpengine.com/wp-content/uploads/2019/01/blog-2-1.jpg"
                alt=""
              />
               <div className=" -mt-32">
                <button
                  className="bg-white shadow-md p-3 hover:bg-[#f04f25] hover:text-white
               hover:border-white m-6 py-10 px-16 "
                >
                  <p className="text-2xl font-bold mt-2">Business</p>
                  <p className="text-2xl font-bold">Accounting</p>
                  <p className="text-2xl font-bold">Management &</p>
                  <p className=" ml-auto mr-auto text-2xl font-bold mb-1">
                    Consultancy
                  </p>
                  <p className="border-b-2 border-[#f04f25] hover:border-white w-10 ml-auto mr-auto"></p>
                  <p className=" font-bold mb-2 mt-2">JANUARY 1,2023</p>
                </button>
                <div className=" p-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin tincidunt nunc lorem, nec faucibus mi facilisis eget....
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
