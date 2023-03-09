import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AddInvoice = () => {
  return (
    <div className="p-6">
      <div className="flex   justify-between text-gray-600 md:px-6 mt-10">
        <p className="text-2xl font-bold">Add New Customer </p>
        <Link to="/dashboard/invoice">
          <p className="bg-[#5e23e7]  rounded-md w-20 flex text-white">
            {" "}
            <span className="mr-2 mt-1">
              <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>
            </span>{" "}
            Back
          </p>
        </Link>
      </div>
      {/* body */}

      <div className="bg-white shadow-md rounded-md">
        <div className=" flex justify-between md:px-6 mt-10 mb-8">
          <div className=" text-left">
            <img
              className="w-12 h-12"
              src="https://templates.iqonic.design/datum/html/assets/images/logo-dark.png"
              alt=""
            />
            <p className="text-xl"> Invoice number</p>
            <p>IN-05866</p>
          </div>

          <div className="mt-10 text-left">
            <p className="text-xl"> Invoice Date</p>
            <p>2nd Oct 2019 03:16 PM</p>
          </div>
        </div>
        <hr />

        <div className=" flex justify-between md:px-6 mt-10 mb-8">
          <div className=" text-left">
            <p className="text-xl font-bold"> Invoice From</p>
            <p>Chris Wood</p>
            <p>4183 Forest Avenue</p>
            <p>New York</p>
            <p>10011</p>
            <p>USA</p>
            <p>chris.wood@blueberry.com</p>
          </div>

          <div className=" text-left">
            <p className="text-xl font-bold"> Invoice From</p>
            <p>Chris Wood</p>
            <p>4183 Forest Avenue</p>
            <p>New York</p>
            <p>10011</p>
            <p>USA</p>
            <p>chris.wood@blueberry.com</p>
          </div>
        </div>
        <hr />
        <br />

        <div class="flex flex-col p-2 ">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full border text-center">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 border-r text-left"
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 border-r text-left"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 border-r text-right"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-right"
                      >
                        price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r text-left">
                        1
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r text-left">
                        OR-325548
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r text-right">
                        6
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">
                        233
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r text-left">
                        2
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r text-left">
                        OR-325548
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r text-right">
                        6
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">
                        233
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r text-left">
                        3
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r text-left">
                        OR-325548
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r text-right">
                        6
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">
                        233
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-right p-2 mt-4">
                  <p> Subtotal: $1,600</p>

                  <p> Subtotal: $1,600</p>
                  <p>----------------------</p>
                  <p> Total: $1,900</p>
                </div>
                <div className="grid md:grid-cols-4">
                  <div className="col-span-3 text-left hidden sm:block">
                    <p> Notes</p>
                    <p>
                      Please send all items at the same time to the shipping
                      address. Thanksin advance.
                    </p>
                  </div>
                  <div className="flex ">
                    <p className="bg-gray-400 hover:bg-slate-500 py-2 px-8 text-white rounded-md">Print</p>
                    <p className="bg-blue-600 hover:bg-blue-200 py-2 px-8 text-white ml-2 rounded-md">Send</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInvoice;
