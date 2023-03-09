import React from "react";

const AllProductModal = ({ filteredProducts }) => {
  console.log("Jony Mia filteredProducts,,,", filteredProducts);
  console.log("Jony Mia filteredProducts,,,", filteredProducts.productName);
  return (
    <div>
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={filteredProducts?.image}
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{filteredProducts?.name}</h5>
            <p class="text-gray-700 text-base mb-4">{filteredProducts?.description}</p>
            <p class="text-gray-600 text-xs">
              Created at{" "}
              {filteredProducts?.createdDate && new Date(filteredProducts?.createdDate)?.toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductModal;
