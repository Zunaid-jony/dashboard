import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Navigation from "../../../Components/Header/Footer/Navigation";
import CategoryDiteilsSection from "./CategoryDiteilsSection";

const CategoryDitails = () => {
  const [product, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("product", product);

  const ProductData = async (value) => {
    try {
      setLoading(true);
      await axios
        .get(
          `https://primeautomationapiapi.primeautomaticdoor.com/products`
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
  const [items, setItems] = useState(product);
  const [active, setActive] = useState(product);

  useEffect(() => {
    setItems(product);
  }, [product]);
  console.log("Product--->jony", product);

  return (
    <div>
      <Navigation></Navigation>
      <div>
        <br />

        <br />
        <br />
        <br />
        <div className="ml-auto mr-auto m-1"></div>

        <div className="grid flex md:grid-cols-4 sm:grid-cols-2 gap-6 container ml-auto mr-auto m-2">
          {product.map((item) => (
            <CategoryDiteilsSection
              key={item.id}
              item={item}
            ></CategoryDiteilsSection>
          ))}

          <br />
        </div>

        <br />
        <br />
      </div>
    </div>
  );
};

export default CategoryDitails;
