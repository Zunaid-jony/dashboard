import React from "react";

const Recenttwo = ({ item }) => {
  return (
    <div className="rounded-2xl shadow  mt-6 ml-auto mr-auto  container text-left border border-slate-300  singel-card m-4 ">
      <div class="overflow-hidden  relative group">
        <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300   absolute  to-transparent bg-gradient-to-t inset-x-0 bottom-2 pt-30 text-white flex ">
          <div></div>
        </div>
        <img
          //   onClick={() => navigate(`/product/${item.id}`)}
          className=" ml-auto md:h-52 rounded-2xl mr-auto w-full p-2 card-img  aspect-square  ease-in-out cursor-pointer "
          src={item?.url1}
          alt=""
        />
      </div>
      {/* <p className="mt-3 ml-3 ">{item.id}</p>
      <p className="ml-3">{item.id}</p> */}
      <p className="flex ml-3"></p>
      {/* button */}
    </div>
  );
};

export default Recenttwo;
