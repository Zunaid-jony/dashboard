import React from "react";

const Product_Detail = ({ item }) => {
  console.log("Jony Mia Item", item);
  return (
    <div>
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={item.image}
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{item.name}</h5>
            <p class="text-gray-700 text-base mb-4">{item.description}</p>
            <p class="text-gray-600 text-xs">
              Created at{" "}
              {item?.createdDate && new Date(item?.createdDate)?.toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Detail;
