import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";
import ReactPaginate from "react-paginate";
import { useFormik } from "formik";
import { CommonButton } from "../../../Components/Button/Button";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { AiTwotoneDelete } from "react-icons/ai";

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      productName: "",
      price: "",
      discount: "",
      file: null,
      description: "",
      shortDescription:"",
    },
    // validationSchema: signUpSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleSubmit(values);
    },
    enableReinitialize: true,
    validateOnChange: false,
  });
  const apiKey = "f633b9b2b900fa4ce91d346d6b992734";
  const handleSubmit = async (values) => {
    setLoading(true);
    const url = "https://api.imgbb.com/1/upload";
    const formData = new FormData();
    // formData.append("productName", values.productName)
    // formData.append("price", values.price)
    // formData.append("discount", values.discount)
    // formData.append("description", values.description)
    formData.append("image", image);
    formData.append("key", apiKey);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      const imgbbResponse = await axios.post(url, formData, config);
      const imageUrl = imgbbResponse.data.data.url;
      const allData = {
        ...values,
        image: imageUrl,
      };
      const anotherApiResponse = await axios.post(
        "https://primeautomationapiapi.primeautomaticdoor.com/image",
        // "https://prime-automation-server-production.up.railway.app/product",
        allData
      );
      console.log(anotherApiResponse);
      // toast.success("Product added successfully")
      navigate("/");
    } catch (error) {
      setLoading(false);
    }
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("Card", card);

  const ProductData = async (value) => {
    try {
      setLoading(true);
      await axios
        .get(
          `https://primeautomationapiapi.primeautomaticdoor.com/image`
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
  }, []);
  const [items, setItems] = useState(card);
  const [active, setActive] = useState(card);

  useEffect(() => {
    setItems(card);
  }, [card]);

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

  // paginagion

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const [itemOffset, setItemOffset] = useState(1);
  const itemsPerPage = 12;

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

  // Search
  const handleSearchInputChange = (event) => {
    setSearchTerm(event?.target?.value);
  };

  const filteredProducts = currentItems?.filter((product) =>
    product?.productName?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );


   // delete
 function deleteItem(id) {
  fetch(
    `https://primeautomationapiapi.primeautomaticdoor.com/image/${id}`,
    {
      method: "DELETE",
    }
  ).then((result) => {
    result.json().then((resp) => {
      alert("Delete Successfully");
      console.warn(resp);
      // toast.success('Product deleted successfully.');
      // alert="dfdfdfdf"

      ProductData();
      // getDelete()
    });
  });
}

  return (
    <div className=" container ml-auto mr-auto">
      <div className="grid grid-cols-3 container pl-2">
        <div className=" bg-white shadow-xl p-2 mt-2">
          <div className="mt-5">
            <div>
              <div className="flex w-full mt-12 max-w-sm mx-auto overflow-hidden white:bg-gray-800 shadow-xl lg:max-w-3xl m-3 boder-1">
                <div className="w-full px-6 py-8 md:px-8 ">
                  <form
                    className="w-6/6 ml-auto mr-auto"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="mt-4 text-left ">
                      <label
                        className="block mb-2 text-sm font-medium text-black dark:text-black"
                        for="LoggingEmailAddress"
                      >
                        <p className="text-xl font-bold mb-2">
                          Add New Category
                        </p>
                        Name
                      </label>
                      <input
                        id="productName"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
                        name="productName"
                        onChange={formik.handleChange}
                        value={formik.values.productName}
                        required
                        placeholder="Enter Product name"
                      />
                      <p className="mt-1">
                        The name is how it appears on your site.
                      </p>
                    </div>
                    <br />
                    <div className="mt-3 text-left mb-8">
              <label
                className="block mb-2 text-sm font-medium "
                for="shortDescription"
                placeholder="Inter Your Email"
              >
                Product short description
              </label>
              <textarea
                id="shortDescription"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="shortDescription"
                onChange={formik.handleChange}
                value={formik.values.shortDescription}
                required
              />
            </div>

                    <div className="mt-4 text-left">
                      <label
                        className="block mb-2 text-sm font-medium text-black dark:text-black"
                        for="price"
                      >
                        Slug
                      </label>
                      <input
                        id="price"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
                        name="price"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        required
                        placeholder="Enter Price"
                      />
                      <p className="mt-1">
                        The “slug” is the URL-friendly version of the name. It
                        is usually all lowercase and contains only letters,
                        numbers, and hyphens.
                      </p>
                    </div>




                    {/* <div class="col-span-6 sm:col-span-3">
              <label
                for="country"
                class="block text-sm font-medium text-gray-700 text-left"
              >
                Add New Category
              </label>
              <select
                id="category"
                name="category"
                autocomplete="category"
                onChange={formik.handleChange}
                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value={formik.values.category}>Select Category</option>
                <option value="Accessories">Accessories</option>
                <option value="Aotumatic_RollingShutter">
                  Aotumatic Rolling shutter
                </option>
                <option value="Autoatic_GateSystem">
                  Autoatic Gate System
                </option>
                <option value="AutomaticRevolvingDoor">
                  Automatic Revolving Door
                </option>
                <option value="LCD_Advertising_Display_Klosk">
                  LCD Advertising Display Klosk
                </option>
                <option value="Motor_for_Rolling_shutter">
                  Motor for Rolling shutter
                </option>
                <option value="Automatic_Swing_Door">
                  Automatic Swing Door
                </option>
                <option value="Archway_Gate-walk_Though_Metal_Detector">
                  Archway Gate-walk Though Metal Detector
                </option>
                <option value="Car_Parking_Barrier">Car Parking Barrier</option>
                <option value="Safety_Barrier">Safety Barrier</option>
                <option value="Motor_For">
                  Motor For Sliding / Swing Gate
                </option>
                <option value="Motor">Motor For Sliding / Swing Gate</option>
                <option value="Wifi">
                  Wifi Control Home Automation System
                </option>
                <option value="Hydraulic">
                  Hydraulic Dock Leveler / Hydraulic Scissor Lift
                </option>
                <option value="Movable">Movable/ folding Partition Wall</option>
                <option value="Movable_folding">
                  Movable/ folding Partition Wall
                </option>
                <option value="Turnstile">Turnstile and Barner</option>
                <option value="Automatic">
                  Automatic Car Parking Management System
                </option>
                <option value="Digital">
                  Digital Access Control Door Lock
                </option>
              </select>
            </div> */}

                    <div className="mt-4">
                      <div className="flex justify-between">
                        <label
                          className="block mb-2 text-sm font-medium text-black dark:text-black"
                          for="file"
                        >
                          Select Image
                        </label>
                      </div>

                      <input
                        id="file"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        type="file"
                        name="file"
                        onChange={handleImage}
                        // value={data.password}
                        placeholder="file"
                      />
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between">
                        <label
                          className="block mb-2 text-sm font-medium text-black dark:text-black"
                          for="loggingPassword"
                        >
                          Product Description
                        </label>
                      </div>

                      <textarea
                        id="description"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        required
                        placeholder="description"
                      />
                      <p className="mt-1">
                        The description is not prominent by default; however,
                        some themes may show it.
                      </p>
                    </div>

                    <div className="mt-2 ">
                      <CommonButton
                        className="p-mr-2 p-button-raised p-button-secondary w-full"
                        title="Save"
                        disabled={false}
                        label="Save"
                        type="submit"
                        icon="pi pi-save"
                        color="p-button-raised p-button-success"
                        loading={loading}
                      />
                    </div>
                  </form>

                  <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <Link
                      to="/login"
                      className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                    ></Link>

                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}

        <div className="container col-span-2 justify-between">
          <div></div>

          <div className="p-inputgroup container mt-6 px-4 sm:px-6 lg:px-8">
            <InputText
              placeholder="Search products"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
            <Button icon="pi pi-search" className="p-button-warning" />
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
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900  hidden sm:block"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Description
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900  hidden sm:block"
                            >
                              Slug
                            </th>
                            <th
                              scope="col"
                              className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                            >
                             Edit
                            </th>
                            <th
                              scope="col"
                              className="relative py-3.5 pl-3 pr-4 sm:pr-6"
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
                            <tr key={person?._id}>



<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                <div className="flex items-center">
                                  <div className="ml-4">
                                    <div className="font-medium text-gray-900 w-12 h-12">
                                      <img src={person?.image} alt="" />
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                <div className="flex items-center">
                                  <div className="ml-4">
                                    <div className="font-medium text-gray-900">
                                      {person?.productName}
                                    </div>
                                    <div className="text-gray-500  hidden sm:block">
                                      {/* {person?.productTag} */}
                                    </div>
                                  </div>
                                </div>
                              </td>
                             

                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 w-12">
                                {person?.shortDescription}
                              </td>
                              
                              <td className="text-left relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6">
                                <Link
                                  to="/"
                                  className="text-indigo-600 hover:text-indigo-900"
                                >
                                   {person?.price}
                                  <span className="sr-only">
                                    , {person?.name}
                                    , {person?.category}
                                  </span>
                                </Link>
                              </td>

                              <td className="text-left relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6">
                              <p className="text-[#e93939] text-xl cursor-pointer">
                                <AiTwotoneDelete
                                  onClick={() => deleteItem(person?._id)}
                                ></AiTwotoneDelete>
                              </p>
                            </td>


                            <td className="text-left relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6">
                              <p className="text-[#3971e9] text-sm cursor-pointer"
                              
                              onClick={() => {
                                navigate(`/editCategoris/${person?._id}`);
                              }}>
                               Edit
                              </p>
                            </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
