import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Input } from "@material-tailwind/react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import ReactPaginate from "react-paginate";
import { AiTwotoneDelete } from "react-icons/ai";

const AllPost = () => {
  const [card, setCard] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  console.log("allPost", card);

 

  const user = [
    {
      name: "jony",
      email: "jony@gmail.com",
    },
    {
      name: "jony",
      email: "jony@gmail.com",
    },
  ];

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





   // paginagion

   const [currentItems, setCurrentItems] = useState([]);
   const [pageCount, setPageCount] = useState(1);
 
   const [itemOffset, setItemOffset] = useState(1);
   const itemsPerPage = 8;
 
   useEffect(() => {
     // Fetch images from another resources.
     const endOffset = itemOffset + itemsPerPage;
     console.log(`Loading images from ${itemOffset} to ${endOffset}`);
     setCurrentItems(card.slice(itemOffset, endOffset));
     setPageCount(Math.ceil(card.length / itemsPerPage));
   }, [itemOffset, itemsPerPage, card]);
 
   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
     const newOffset = (event.selected * itemsPerPage) % card.length;
     console.log(
       `User requested page number ${event.selected}, which is offset ${newOffset}`
     );
     setItemOffset(newOffset);
   };



   const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredProducts = currentItems.filter((product) =>
  product?.productName.toLowerCase().includes(searchTerm.toLowerCase())
);




 // delete
 function deleteItem(id) {
  fetch(
    `https://primeautomationapiapi.primeautomaticdoor.com/product/${id}`,
    {
      method: "DELETE",
    }
  ).then((result) => {
    result.json().then((resp) => {
      alert("Hello world!");
      console.warn(resp);
      // toast.success('Product deleted successfully.');
      // alert="dfdfdfdf"

      ProductData();
      // getDelete()
    });
  });
}
  return (
    <div className="container ">
      <div className="text-left flex">
        <p className="text-xl ml-2"> Posts</p>
        <p className=" border-2 border-gray-500 ml-4 pl-2 pr-2"> 
        <Link to="/dashboard/product">
        Add New
        </Link>
       </p>
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
          

          {/* seEXH */}
          <div className="m-1 md:col-span-1 col-span-2 -mt-8 ">
            <p className="fond-bold"></p>
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
            <div className="p-inputgroup">
            <InputText
              placeholder="Search products"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
            <Button icon="pi pi-search" className="p-button-warning" />
          </div>
           
          </div>
        </div>
      </div>

      <div className="  justify-between flex p-2">
        <div className="flex">
        
         
          {/* ssssssssssssssss */}

        
          {/* <div class="col-span-6 sm:col-span-3">
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
          </div> */}
          
        </div>

     

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
                          <span className="ml-2 -mt-1"> Titles</span> 

                          
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900  hidden sm:block"
                        >
                          
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >Author
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Categories
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          	Tags
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          	<BiMessageRoundedDetail className="text-xl"></BiMessageRoundedDetail>
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Delete
                        </th>
                      
                       
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white  text-left">
                      {/* map section  */}
                      {/* map section  */}
                      {/* map section  */}

                      {filteredProducts?.map((person) => (
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
                                  <p>md jony</p>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <p>Uncategorized</p>
                          </td>
                          <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500 mt-3  hidden sm:block">
                           <p>-</p>
                          </td>
                          <td className="text-left relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6">
                            <Link
                              to="/"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              <BiMessageRoundedDetail></BiMessageRoundedDetail>
                             
                            </Link>
                          </td>
                          <td className="text-left relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6">
                           <p>
                            31-1-2023
                           </p>
                          </td>
                          <td className="text-left relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6">
                              <p className="text-[#e93939] text-xl cursor-pointer">
                                <AiTwotoneDelete
                                  onClick={() => deleteItem(person?._id)}
                                ></AiTwotoneDelete>
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
      <br />
      <br />
      <ReactPaginate
                      breakLabel="..."
                      nextLabel="next >"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={3}
                      pageCount={pageCount}
                      previousLabel="< previous"
                      renderOnZeroPageCount={null}
                      containerClassName="pagination"
                      pageLinkClassName="page-num"
                      previousLinkClassName="page-num"
                      nextLinkClassName="page-num"
                      activeLinkClassName="active"
                    />
    </div>
  );
};

export default AllPost;
