import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useFormik } from "formik"
import axios from "axios"
import { CommonButton } from "../../../Components/Button/Button"




const CategoriesForm = () => {
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      productName: "",
      price: "",
      discount: "",
      file: null,
      description: "",
    },
    // validationSchema: signUpSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      handleSubmit(values)
    },
    enableReinitialize: true,
    validateOnChange: false,
  })
  const apiKey = "f633b9b2b900fa4ce91d346d6b992734"
  const handleSubmit = async (values) => {
    setLoading(true)
    const url = "https://api.imgbb.com/1/upload"
    const formData = new FormData()
    // formData.append("productName", values.productName)
    // formData.append("price", values.price)
    // formData.append("discount", values.discount)
    // formData.append("description", values.description)
    formData.append("image", image)
    formData.append("key", apiKey)
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    }

    try {
      const imgbbResponse = await axios.post(url, formData, config)
      const imageUrl = imgbbResponse.data.data.url
      const allData = {
        ...values,
        image: imageUrl,
      }
      const anotherApiResponse = await axios.post(
        "https://primeautomationapiapi.primeautomaticdoor.com/product",
        // "https://prime-automation-server-production.up.railway.app/product",
        allData
      )
      console.log(anotherApiResponse)
      // toast.success("Product added successfully")
      navigate("/")
    } catch (error) {
      setLoading(false)
    }
  }
  const handleImage = (e) => {
    setImage(e.target.files[0])
  }

  return (
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
                  <p className="text-xl font-bold mb-2">Add New Category</p>
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
                <p className="mt-1">The name is how it appears on your site.</p>
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
             The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.
             </p>
              </div>
              

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
                The description is not prominent by default; however, some themes may show it.
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
  )
}

export default CategoriesForm
