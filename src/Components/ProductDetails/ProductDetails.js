import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import AuthContext from "../../Context/AuthProvider/AuthContext";
import Navigation from "../Header/Footer/Navigation";
import Map from "./Map";
import Footer from "./../Header/Footer/Footer";
import ProductDetailsMain from "./ProductDetailsMain";
import ProductHeader from "./ProductHeader/ProductHeader";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    fetch(
      "https://primeautomationapiapi.primeautomaticdoor.com/products"
    )
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);
  console.log("All-----Product", allProduct);
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

  return (
    <div>
      <Navigation></Navigation>
      <br />
      <br />
      <br />
      <ProductDetailsMain
        product1={product}
        allProduct={allProduct}
      ></ProductDetailsMain>
      <ProductHeader  product1={product}></ProductHeader>
      <Map></Map>
      <div className="grid grid-cols-6 container ml-auto mr-auto mt-10">
        <div className="col-span-2">
          <div className=" ml-auto mr-auto">
            <div className="flex min-h-full flex-col  sm:px-2 lg:px-3 md:ml-6 pt-1  mt-0 ">
              <div className="sm:sticky sm:top-8"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
