import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import { AiFillEdit } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { GrView } from "react-icons/gr";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { CommonButton } from "../../../Components/Button/Button";



const EditCategoris = () => {


    const [image, setImage] = useState(null);
    const [image1, setImage1] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


// click to on other page
    const [product, setProduct] = useState([]);
    const [allProduct, setAllProduct] = useState([]);
  
    useEffect(() => {
      fetch(
        `https://primeautomationapiapi.primeautomaticdoor.com/image`
      )
        .then((res) => res.json())
        .then((data) => setAllProduct(data));
    }, []);
    console.log("All----Edit", allProduct);
    console.log("All----Edit", product?._id);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const { id } = useParams();
  
    useEffect(() => {
      const getProducts = () => {
        setProduct(allProduct?.find((obj) => obj._id == id));
      };
      if (allProduct?.length > 0) {
        getProducts();
      }
    }, [allProduct, id]);
    console.log("Product", product);





  
  const formik = useFormik({
    initialValues: {
      productName: product.productName,
      description: product.description,
      shortDescription:  product.shortDescription,
      productTag:  product.productTag,
      category:product.category,
    },
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
    formData.append("image", image);
    // formData.append("image1", image1);
    formData.append("key", apiKey);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };


    try {
      const imgbbResponse = await axios.post(url, formData, config);
      const imageUrl = imgbbResponse.data.data.url;
      // const imageUrl1 = imgbbResponse.data.data.url;
      const allData = {
        ...values,
        image: imageUrl,
        createdDate: new Date(),
        upsertedId:product?._id,
      };
      const anotherApiResponse = await axios.post(
        `https://primeautomationapiapi.primeautomaticdoor.com/image`,
       
        allData
      );
      console.log(anotherApiResponse);
      navigate("/categories");
    } catch (error) {
      setLoading(false);
    }
  };
  //   try {
  //     const imgbbResponse = await axios.post(url, formData, config);
  //     const imageUrl = imgbbResponse.data.data.url;
  //     // const imageUrl1 = imgbbResponse.data.data.url;
  //     const allData = {
  //       ...values,
  //       image: imageUrl,
  //       createdDate: new Date(),
  //       _id:product?._id,
  //     };
  //      await axios.put(
  //       `https://primeautomationapiapi.primeautomaticdoor.com/products`,
  //       allData
  //     )
  //     .then((res)=>{
  //       if(res.status === 200){
  //         navigate("/");

  //       }
  //     })
     
    
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };


  // end..........

  // const handleChange = (e) => {
  //   const file = e.target.files[0];
  //   setImage(file);
  //   const preview = URL.createObjectURL(file);
  //   setPreviewUrl(preview);
  // };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleImage1 = (e) => {
    setImage1(e.target.files[0]);
  };
  return (
    <div>
        <form className="bg-white p-6 rounded-lg" onSubmit={formik.handleSubmit}>
      <div className="bg-[#f0f0f1]">
        <div className="container ml-auto mr-auto grid grid-cols-12 pl-4 gap-4">
          <div className="col-span-9">
            <div className="mt-3 text-left mb-4">
              <label
                className="block mb-2 text-sm font-medium"
                for="productName"
                placeholder="Inter Your Email"
              >
                Update new product
              </label>
              <input
                id="productName"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="productName"
                onChange={formik.handleChange}
                value={formik.values.productName}
                // value={product?.productName}
                // defaultValue={product?.productName}
                required
              />
            </div>
            <div className="mt-3 text-left mb-8">
              <label
                className="block mb-2 text-sm font-medium"
                for="description"
                placeholder="Inter Your Email"
              >
                Product description
              </label>
              <textarea
                id="description"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="description"
                onChange={formik?.handleChange}
                value={formik.values.description}
                // defaultValue={formik?.description}
                // defaultValue={product?.productName}
                
                required
              />
            </div>
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
                // defaultValue={product?.shortDescription}
                required
              />
            </div>

            {/* dopd */}





          <div class="col-span-6 sm:col-span-3">
            <label
              for="country"
              class="block text-sm font-medium text-gray-700 text-left"
            >
          Update New Category

            </label>
            <select


              id="category"
              name="category"
             
            
              autocomplete="category"

              onChange={formik.handleChange}
              
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value={formik.values.category}>
                Select Category
              </option>
              <option value="Accessories">Accessories</option>
              <option value="Aotumatic_RollingShutter">Aotumatic Rolling shutter</option>
              <option value="Autoatic_GateSystem">Autoatic Gate System</option>
              <option value="AutomaticRevolvingDoor">Automatic Revolving Door</option>
              <option value="LCD_Advertising_Display_Klosk">LCD Advertising Display Klosk</option>
              <option value="Motor_for_Rolling_shutter">Motor for Rolling shutter</option>
              <option value="Automatic_Swing_Door">Automatic Swing Door</option>
              <option value="Archway_Gate-walk_Though_Metal_Detector">Archway Gate-walk Though Metal Detector</option>
              <option value="Car_Parking_Barrier">Car Parking Barrier</option>
              <option value="Safety_Barrier">Safety Barrier</option>
              <option value="Motor_For">Motor For Sliding / Swing Gate</option>
              <option value="Motor">Motor For Sliding / Swing Gate</option>
              <option value="Wifi">Wifi Control Home Automation System</option>
              <option value="Hydraulic">Hydraulic Dock Leveler / Hydraulic Scissor Lift</option>
              <option value="Movable">Movable/ folding Partition Wall</option>
              <option value="Movable_folding">Movable/ folding Partition Wall</option>
              <option value="Turnstile">Turnstile and Barner</option>
              <option value="Automatic">Automatic Car Parking Management System</option>
              <option value="Digital">Digital Access Control Door Lock</option>
            </select>
          </div>

















          














            {/* <div className="mt-3 text-left mb-8">
              <label
                className="block mb-2 text-sm font-medium "
                for="createdDate"
                // placeholder="Inter Your Email"
              >
                Date
              </label>
              <input
                id="createdDate"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="date"
                name="createdDate"
                onChange={formik.handleChange}
                value={formik.values.createdDate}
                required
              />
            </div> */}
          </div>

          <div className="col-span-3  mt-11">
            
            <div className="border-2 border-gray-100 w-full p-2 bg-white mt-6">
              <p className="p-2 w-full text-left">Product Images </p>
              <hr />

              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-black dark:text-black"
                    for="file1"
                  >
                    {/* Select Image */}
                  </label>
                </div>

                <input
                  id="file1"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="file"
                  name="file1"
                  onChange={handleImage}
                  placeholder="file"
                />
              </div>

              <hr />
            </div>

            {/* <div className="border-2 border-gray-100 w-full p-2 bg-white mt-6">
            <p className="p-2 w-full text-left">Image Gallery </p>
            <hr />

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                  for="file"
                ></label>
              </div>

              <input
                id="file2"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="file"
                name="file2"
                onChange={handleImage1}
                placeholder="file"
              />
            </div>
            <hr />
          </div> */}

            {/* product Tag */}

            <div className="border-2 border-gray-100 w-full p-2 bg-white mt-6">
              <p className="p-2 w-full text-left">Product Tags </p>
              <hr />
              <div className="mt-4 text-left mb-4">
                <label
                  className="block mb-2 text-sm font-medium "
                  for="productTag"
                  placeholder="Inter Your Email"
                >
                  Update product tag
                </label>
                <input
                  id="productTag"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="productTag"
                  onChange={formik.handleChange}
                  value={formik.values.productTag}
                  // defaultValue={product?.productTag}
                  required
                />
              </div>

              <hr />
              <div className="mt-2 ">
                <CommonButton
                  className="p-mr-2 p-button-raised p-button-secondary"
                  title="Save"
                  disabled={false}
                  label="Save"
                  type="submit"
                  icon="pi pi-save"
                  color="p-button-raised p-button-success"
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>


    </div>
  )
}

export default EditCategoris