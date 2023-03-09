import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Input } from "@material-tailwind/react";
import { BiMessageRoundedDetail } from "react-icons/bi";

const Comments = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("allPost", card);

  

  const ProductData = async (value) => {
    try {
      setLoading(true);
      await axios
        .get(
          `https://primeautomationapiapi.primeautomaticdoor.com/product`
          // ` https://prime-automation-server-production.up.railway.app/product`
        )
        .then(function (res) {
          setLoading(false);
          setCard(res?.data);

          console.log(res?.data);
        })
        .catch(function (error) {
          toast.error(error);
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
      toast.error(err);
    }
  };
  useEffect(() => {
    ProductData();
  }, [card]);

  console.log("Product--->jony", card);
  return (
    <div className="container ">
      <div className="text-left flex">
        <p className="text-xl ml-2">Comments</p>
        
      </div>
      {/* ...... */}
      <div className="text-left flex justify-between mt-4 p-2 ml-auto mr-auto">
        <div className="flex">
          <p className="text-sm">
            All ({card?.length}) <span className="ml-2 mr-2"> |</span>
          </p>
          <p className=" text-sm"> Published ({card?.length})</p>
        </div>

        <div className="flex">
          <div className="m-1 -mt-8">
            <p className="fond-bold"></p>
            <input
              placeholder=""
              className="mt-6 w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none  focus:border-indigo-600 "
              // className="p-2.5 rounded-md md:w-30 xl:w-40 sm:w-60 w-56 ml-2"
              type="number"
            />
          </div>

          {/* seEXH */}
          <div className="m-1 md:col-span-1 col-span-2 -mt-8 ">
            <p className="fond-bold"></p>
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
            <Link to="/listing">
              <input
                className="mt-6 cursor-pointer bg-[#61dafb]  text-center ml-auto mr-auto font-bold  w-full p-2.5 text-white  border border-[#61dafb] rounded-md shadow-sm outline-none placeholder-white "
                placeholder="Search"
                disabled
                type="search"
              >
                {/* <BiSearch></BiSearch> */}
              </input>
            </Link>
          </div>
        </div>
      </div>

      <div className="  justify-between flex p-2">
        <div className="flex">
          <div class="col-span-6 sm:col-span-3">
            <label
              for="country"
              class="block text-sm font-medium text-gray-700"
            ></label>
            <select
              id="Transmission"
              name="Transmission"
              autocomplete="country-name"
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option Value="" disabled selected>
                All Post
              </option>
              <option value="Manual">Product</option>
              <option value="Manual">Product</option>
            </select>
          </div>
          <div>
            <p
              className="border-2 border-gray-100 py-1.5 text-sm mr-1 mt-1 ml-1 p-1
          "
            >
              {" "}
              Apply: {card?.length}
            </p>
          </div>
          {/* ssssssssssssssss */}

          <div class="col-span-6 sm:col-span-3">
            <label
              for="country"
              class="block text-sm font-medium text-gray-700"
            ></label>
            <select
              id="Transmission"
              name="Transmission"
              autocomplete="country-name"
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option Value="" disabled selected>
                Select Transmission
              </option>
              <option value="Manual">Manual</option>
              <option value="Manual">Manual</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label
              for="country"
              class="block text-sm font-medium text-gray-700"
            ></label>
            <select
              id="Transmission"
              name="Transmission"
              autocomplete="country-name"
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option Value="" disabled selected>
                Select Transmission
              </option>
              <option value="Manual">Manual</option>
              <option value="Manual">Manual</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
          <p
            className="border-2 border-gray-100 py-1.5 font-bold mt-1 ml-1 p-1
          "
          >
            {" "}
            Total Post: {card?.length}
          </p>
        </div>

        <p>items</p>

        {/*  Table data */}
        {/*  Table data */}
        {/*  Table data */}
        {/*  Table data */}
      </div>

      <div>
        <div className="px-4 sm:px-6 lg:px-8 mt-5">
          <div className="sm:flex sm:items-center">
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"></div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 p-2">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 flex"
                        >
                         
                            <div class="flex items-center mr-2">
                             
                              
                            </div>
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <span className="ml-2 -mt-1"> Author</span> 

                          
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900  hidden sm:block"
                        >
                          
                        </th>
                       
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Comment
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          		
                          In response to
                        </th>
                        
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Submitted on
                        </th>
                      
                       
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white  text-left">
                      {/* map section  */}
                      {/* map section  */}
                      {/* map section  */}

                      {card?.map((person) => (
                        <tr key={person._id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="font-medium text-gray-900">
                                  
                                  <span className="mr-2 mt-1">

                                  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                  </span>
                                  {person?.productName}
                                </div>
                                <div className="text-gray-500  hidden sm:block">
                                  {person.displayName}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div className="flex items-center">
                              <div className="">
                                <div className="font-medium text-gray-900">
                                
                                 <p>  Hi, this is a comment.</p>
                                 <p>To get started with moderating, editing, and deleting .</p>

                                 <p className=" text-white cursor-pointer hover:text-black"> Unapprove | Reply | Quick Edit | Edit | Spam | Trash</p>



                                 



                              

Commenter avatars come from Gravatar.

                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <p>Uncategorized</p>
                          </td>
                         
                        
                          <td className="text-left relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6">
                           <p>
                            31-1-2023
                           </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
