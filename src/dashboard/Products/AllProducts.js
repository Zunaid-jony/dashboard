import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./Pagination.css";
import { Dialog } from "primereact/dialog";

import { BiMessageRoundedDetail } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import { BsFillImageFill, BsFillStarFill } from "react-icons/bs";
import { AiOutlineFolderView, AiTwotoneDelete } from "react-icons/ai";
import { ProgressSpinner } from "primereact/progressspinner";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import AllProductModal from "./AllProductModal";

const AllProducts = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };
  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const navigate = useNavigate();
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("AllProducts", card);
  // console.log("product",product)

  const [searchTerm, setSearchTerm] = useState("");
  const ProductData = async () => {
    try {
      setLoading(true);
      await axios
        .get(`https://primeautomationapiapi.primeautomaticdoor.com/products`)
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
  }, []);

  // delete methord
  const deleteProduct = async (id) => {
    console.log("delete ", deleteProduct);
    try {
      await axios.delete(
        `https://primeautomationapiapi.primeautomaticdoor.com/products/${id}`
      );
      setCard(card.filter((product) => product.id !== id));
      toast.success("Product deleted successfully.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // delete
  function deleteItem(id) {
    fetch(
      `https://primeautomationapiapi.primeautomaticdoor.com/products/${id}`,
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

  // update
  const updateProduct = async (id, updatedProduct) => {
    try {
      const response = await axios.put(
        `https://primeautomationapiapi.primeautomaticdoor.com/products/${id}`,
        updatedProduct
      );
      const updatedCard = card.map((product) =>
        product.id === id ? response.data : product
      );
      setCard(updatedCard);
      toast.success("Product updated successfully.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const [itemOffset, setItemOffset] = useState(1);
  const itemsPerPage = 6;

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

  // search
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = currentItems.filter((product) =>
    product?.productName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // search end

  // Filter

  return (
    <div className="container mt-4">
      <div className="text-left flex">
        <p className="text-xl ml-2">Products</p>
        <p className=" border-2 border-gray-500 ml-4 pl-2 pr-2">
          <Link to="/addNew">Add New</Link>
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
          {/* <div className="m-1 -mt-8">
            <p className="fond-bold"></p>
            <input
              className="mt-6 w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none  focus:border-indigo-600 "
              // className="p-2.5 rounded-md md:w-30 xl:w-40 sm:w-60 w-56 ml-2"
              placeholder="Search products"
              value={searchTerm}
              onChange={handleSearchInputChange}
              type="text"
            />
          </div> */}

          <div className="p-inputgroup">
            <InputText
              placeholder="Search products"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
            <Button icon="pi pi-search" className="p-button-warning" />
          </div>

          {/* seEXH */}
          <div className="m-1 md:col-span-1 col-span-2 -mt-8 ">
            <p className="fond-bold"></p>
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
            <Link to="/listing">
              {/* <input
                className="mt-6 cursor-pointer bg-[#61dafb]  text-center ml-auto mr-auto font-bold  w-full p-2.5 text-white  border border-[#61dafb] rounded-md shadow-sm outline-none placeholder-white "
                placeholder="Search"
                disabled
                type="search"
              >
              
              </input> */}
            </Link>
          </div>
        </div>
      </div>

      <div className="  justify-between flex p-2">
        {/* <div className="flex">
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
        </div> */}

        {/*  Table data */}
        {/*  Table data */}
        {/*  Table data */}
        {/*  Table data */}
      </div>

      <div>
        <div className="px-4 sm:px-6 lg:px-8 ">
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
                          <div class="flex items-center mr-2"></div>
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          ></input>
                          <span className="ml-2 text-xl  -mt-1"> </span>
                          <span className="ml-2 -mt-1"> Name</span>
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Stock
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
                        ></th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          <BsFillStarFill className="text-xl text-yellow-400"></BsFillStarFill>
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
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          status
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white  text-left ml-auto mr-auto">
                      {loading ? (
                        <div className="card flex justify-content-center">
                          <ProgressSpinner />
                        </div>
                      ) : (
                        //      <div className="card ml-auto mr-auto">
                        //      <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
                        //  </div>

                        filteredProducts.map((product) => (
                          <tr key={product._id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="font-medium text-gray-900 flex">
                                    <span className="mr-2 mt-1">
                                      <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                      ></input>
                                    </span>

                                    <img
                                      className="w-6 h-6 ml-auto mr-auto"
                                      src={product?.image}
                                      alt=""
                                    />
                                    <p className="ml-2">
                                      {product?.productName}
                                    </p>
                                  </div>
                                  <div className="text-gray-500  hidden sm:block">
                                    {product?.productTag}
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

                            <td className="text-left relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6">
                              <Link
                                to="/"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                <AiOutlineFolderView
                                  className=" font-bold text-xl "
                                  onClick={() => {
                                    onClick("displayBasic");
                                  }}
                                ></AiOutlineFolderView>
                              </Link>
                            </td>
                            <td className="text-left relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6"></td>
                            <td className="text-left relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6">
                              <p className="flex text-yellow-500">
                                <BsFillStarFill></BsFillStarFill>
                                <BsFillStarFill></BsFillStarFill>
                                <BsFillStarFill></BsFillStarFill>
                              </p>
                            </td>
                            <td className="text-left relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6">
                              <p>
                                {product?.createdDate &&
                                  new Date(
                                    product?.createdDate
                                  )?.toDateString()}
                              </p>
                            </td>
                            <td className="text-left relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6">
                              <p className="text-[#e93939] text-xl cursor-pointer">
                                <AiTwotoneDelete
                                  onClick={() => deleteItem(product._id)}
                                ></AiTwotoneDelete>
                              </p>
                            </td>
                            <td className="text-left relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6">
                              <p className="text-[#e93939] text-xl cursor-pointer">
                               {product?.status}
                              </p>
                            </td>
                            <td className="text-left relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6">
                              <p className="text-[#394be9]  cursor-pointer">
                                <span
                                  onClick={() => {
                                    navigate(`/edit-product/${product._id}`);
                                  }}
                                >
                                  {" "}
                                  Edit
                                </span>
                              </p>
                            </td>


                            <Dialog
        className="text-l"
        blockScroll
        header="Product View"
        visible={displayBasic}
        style={{ width: "60vw" }}
        onHide={() => onHide("displayBasic")}
        id="fname"
        maximizable
      >
        <AllProductModal filteredProducts={product} />
      </Dialog>
                          </tr>
                        ))
                      )}
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

export default AllProducts;
