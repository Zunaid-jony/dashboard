import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCameraFill } from "react-icons/bs";

const ProductViews = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="absolute mt-4 text-right ">
        <p className=" -mb-6 font-bold  bg-[#fc6103] rounded-r-full text-white absolute text-right px-2 py-1 flex text-xs ">
          {/* <span>{item?.dprice || <span className="hidden"></span>}</span>{" "} */}
          <span className="mt-1"> Off</span>
          <span className=" ml-2 bg-slate-50 rounded-full p-1 text-black">
            30%
            {/* <BsFillCameraFill></BsFillCameraFill> */}
          </span>
        </p>
      </div>
      <img
        // onClick={() => {
        //   navigate(`/product/${item.id}`);
        // }}
        className=" ml-auto md:h-60 rounded-t-md mr-auto w-full  card-img  aspect-square  ease-in-out  "
        // src={item?.postImages[0]?.url}
        src={item?.image}
        alt=""
      />
    </div>
  );
};

export default ProductViews;
