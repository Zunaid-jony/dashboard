import React from "react";
import { AiOutlineDelete, AiTwotoneEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

import { GoPrimitiveDot} from "react-icons/go";

const Tebile = () => {
 
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8 mt-5">
       
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full ">
              <div className="overflow-x-scroll shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 w-full">
                  <thead className="bg-[#f9fbfe] ml-auto mr-auto">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900  "
                      >
                        Customer	
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ml-auto mr-auto justify-center "
                      >
                        Status	
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900  "
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  {/* 1 */}
                  <tbody className="divide-y divide-gray-200 bg-white text-left ">
                    <tr>
                     
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900  ">
                          {/* {person.title} */}
                          <p>01 Jun 2020</p>
                        </div>
                        <div className="text-gray-500  ">
                          {/* {person.department} */}
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-20 w-20 flex-shrink-0 flex py-4">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://templates.iqonic.design/datum/html/assets/images/user/2.jpg"
                              alt=""
                            />
                            <p className="ml-2 mt-3">Maggie Potts</p>
                          </div>
                          
                         
                        </div>
                      </td>
                      <td className="whitespace-nowrap mt-8 px-3 py-4 text-sm text-gray-500 ">
                        <span className="inline-flex  px-2 text-xs font-semibold leading-5 ">
                          {/* {person.status} */}
                          <p className="flex "> <span className="text-[#35d686] text-2xl"> <GoPrimitiveDot></GoPrimitiveDot></span> Completed</p>
                        </span>
                      </td>

                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 ">
                        <p>$104.98</p>
                      </td>
                    </tr>
                  </tbody>
                  {/* 2 */}
                  <tbody className="divide-y divide-gray-200 bg-white text-left ">
                    <tr>
                     
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900  ">
                          {/* {person.title} */}
                          <p>01 Jun 2020</p>
                        </div>
                        <div className="text-gray-500  ">
                          {/* {person.department} */}
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-20 w-20 flex-shrink-0 flex py-4">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://templates.iqonic.design/datum/html/assets/images/user/5.jpg"
                              alt=""
                            />
                            <p className="ml-2 mt-3">Maggie Potts</p>
                          </div>
                          
                         
                        </div>
                      </td>
                      <td className="whitespace-nowrap mt-8 px-3 py-4 text-sm text-gray-500 ">
                        <span className="inline-flex  px-2 text-xs font-semibold leading-5 ">
                          {/* {person.status} */}
                          <p className="flex "> <span className="text-[#35d686] text-2xl"> <GoPrimitiveDot></GoPrimitiveDot></span> Completed</p>
                        </span>
                      </td>

                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 ">
                        <p>$104.98</p>
                      </td>
                    </tr>
                  </tbody>


                    {/* 3 */}
                    <tbody className="divide-y divide-gray-200 bg-white text-left ">
                    <tr>
                     
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900  ">
                          {/* {person.title} */}
                          <p>01 Jun 2020</p>
                        </div>
                        <div className="text-gray-500  ">
                          {/* {person.department} */}
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-20 w-20 flex-shrink-0 flex py-4">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://templates.iqonic.design/datum/html/assets/images/user/1.jpg"
                              alt=""
                            />
                            <p className="ml-2 mt-3">Maggie Potts</p>
                          </div>
                          
                         
                        </div>
                      </td>
                      <td className="whitespace-nowrap mt-8 px-3 py-4 text-sm text-gray-500 ">
                        <span className="inline-flex  px-2 text-xs font-semibold leading-5 ">
                          {/* {person.status} */}
                          <p className="flex "> <span className="text-[#35d686] text-2xl"> <GoPrimitiveDot></GoPrimitiveDot></span> Completed</p>
                        </span>
                      </td>

                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 ">
                        <p>$104.98</p>
                      </td>
                    </tr>
                  </tbody>



                    {/* 4*/}
                    <tbody className="divide-y divide-gray-200 bg-white text-left ">
                    <tr>
                     
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900  ">
                          {/* {person.title} */}
                          <p>01 Jun 2020</p>
                        </div>
                        {/* hidden sm:block */}
                        <div className="text-gray-500  ">
                          {/* {person.department} */}
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-20 w-20 flex-shrink-0 flex py-4">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://templates.iqonic.design/datum/html/assets/images/user/3.jpg"
                              alt=""
                            />
                            <p className="ml-2 mt-3">Maggie Potts</p>
                          </div>
                          
                         
                        </div>
                      </td>
                      <td className="whitespace-nowrap mt-8 px-3 py-4 text-sm text-gray-500 ">
                        <span className="inline-flex  px-2 text-xs font-semibold leading-5 ">
                          {/* {person.status} */}
                          <p className="flex "> <span className="text-[#35d686] text-2xl"> <GoPrimitiveDot></GoPrimitiveDot></span> Completed</p>
                        </span>
                      </td>

                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 ">
                        <p>$104.98</p>
                      </td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tebile;
