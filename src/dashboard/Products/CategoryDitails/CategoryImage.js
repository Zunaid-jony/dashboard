import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryImage = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="absolute mt-4 text-right ml-4">
        <p className=" -mb-6   bg-[#d82121] rounded-xl text-white absolute text-right px-2 flex text-xs">
          {/* <span>{item?.dprice || <span className="hidden"></span>}</span>{" "} */}
          <span className="ml-1"></span>
        </p>
      </div>
      <img
        onClick={() => {
          navigate(`/product/${item?._id}`);
        }}
        className=" ml-auto md:h-52 rounded-t-2xl mr-auto w-full  card-img  aspect-square  ease-in-out cursor-pointer "
        // src={item?.postImages[0]?.url}
        src={item?.image}
        alt=""
      />
    </div>
  );
};

export default CategoryImage;
