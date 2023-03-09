import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CommonButton } from "../../Components/Button/Button";
import { useFormik } from "formik";

const AddNew = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "jony",
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
    console.log("Hit function");
    setLoading(true);
    const url = "https://api.imgbb.com/1/upload";
    const formData = new FormData();
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
        image: imageUrl,
      };
      const anotherApiResponse = await axios.post(
        "https://primeautomationapiapi.primeautomaticdoor.com/image",
        allData
      );
      console.log(anotherApiResponse);

      navigate("/gallery");
    } catch (error) {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
  };

  return (
    <form className="bg-white p-6 rounded-lg" onSubmit={formik.handleSubmit}>
      <div className="flex justify-center">
        <label className="block w-64 py-2 px-4 bg-gray-200 rounded-lg text-center text-gray-700 hover:bg-gray-300 cursor-pointer">
          <input className="hidden" type="file" onChange={handleChange} />
          <div>
            <svg
              className="h-12 w-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-xs font-medium text-gray-600">Choose a file</p>
          </div>
        </label>
      </div>
      {previewUrl && (
        <div className="mt-4">
          <img
            className="w-32 h-32 object-cover rounded-lg"
            src={previewUrl}
            alt="Preview"
          />
        </div>
      )}

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
    </form>
  );
};

export default AddNew;
