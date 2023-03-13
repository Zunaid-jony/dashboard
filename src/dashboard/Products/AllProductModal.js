import React from "react";

const AllProductModal = ({ product }) => {
  console.log("Jony Mia product,,,", product);
  console.log("Jony Mia product,,,", product.productName);
  return (
    <div>
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg ">
          
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={product?.image}
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{product?.name}</h5>
            <p class="text-gray-700 text-base mb-4">{product?.description}</p>
            <p class="text-gray-600 text-xs">
              Created at{" "}
              {product?.createdDate && new Date(product?.createdDate)?.toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductModal;
