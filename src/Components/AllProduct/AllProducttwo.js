import { Link, useNavigate } from "react-router-dom";
import ProductViews from "./ProductViews";
import { GrView } from 'react-icons/gr';

const AllProducttwo = ({ item }) => {
  const navigate = useNavigate();
  return (
    // border-t-neutral-900
    <div className="rounded-xl shadow  mt-6 ml-auto mr-auto  container text-left border border-slate-300  single-card ">
      <div class="overflow-hidden  relative group">
        <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300   absolute  to-transparent bg-gradient-to-t inset-x-0 bottom-2 pt-30 text-white   justify-between ml-4 mr-4 mb-2">
          <div
          
         
          className="flex justify-between ">
            <p></p>
            <div className="mb-16">
              <div className="bg-[#f04f25] w-6 h-6 p-1 rounded-full mb-1">
                <span className=" text-white cursor-pointer">
                  <GrView 
                   onClick={() => {
                    navigate(`/product/${item._id}`);
                  }}
                  
                  ></GrView>
                </span>
              </div>
              {/* <div className="bg-[#f04f25] w-6 h-6 p-1 rounded-full mb-1">
                <span className=" ">
                  <BsFillCameraFill></BsFillCameraFill>
                </span>
              </div> */}
              {/* <div className="bg-[#f04f25] w-6 h-6 p-1 rounded-full ">
                <span className=" ">
                  <BsFillCameraFill></BsFillCameraFill>
                </span>
              </div> */}
            </div>
          </div>
        </div>

        {/* img area */}
        <ProductViews item={item}></ProductViews>
      </div>

      <p className=" ml-3 text-sm text-gray-500 mt-3 font-bold">
        {" "}
        {/* <span className=""> ৳</span> <strike> 200000</strike>{" "}
        <span className=" ml-4 text-[#f04f25]"> ৳</span>{" "} */}
        <span className="text-[#f04f25]">{item?.productName}</span>
      </p>
      {/* Rating */}
      <p className="flex ml-3 text-sm">
        <span className="mt-1  flex mb-1 text-sm">
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
        </span>
      </p>
      <Link to="/categoryDitails">
      <p className="ml-3 text-sm mb-2 hover:text-red-500">
     {item?.category}
      </p>
      </Link>
     

      {/* button */}
    </div>
  );
};

export default AllProducttwo;
