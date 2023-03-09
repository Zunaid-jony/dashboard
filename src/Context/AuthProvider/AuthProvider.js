import AuthContext from "./AuthContext";
import { useEffect, useState } from "react";

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [profile, setProfile] = useState([]);
  const [productItem, setProduct] = useState([]);
  const [userListing, setUserListing] = useState([]);

  // useEffect(() => {
  //   setToken(localStorage.getItem("token"));
  //   setEmail(localStorage.getItem("user"));
  // }, [token, email]);

  // useEffect(() => {
  //   // fetch("https://run.mocky.io/v3/30e41d0f-7a95-474e-ab78-8657fad08f65")
  //   fetch("https://run.mocky.io/v3/bd0e9c4b-f774-4dc3-baa5-7226d73e4b56")
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data));
  // }, [productItem,setProduct]);
  // node js diye kora api atar jonn boss
  // useEffect(() => {
  //   if (email?.length > 0) {
  //     console.log("eimaol", email);
  //     axios
  //       .get(`http://localhost:5000/api/profile?email=${email}`)
  //       .then((res) => {
  //         setProfile(res.data);
  //         console.log("email chak data", res.data);
  //       });
  //   }
  // }, [email, setProfile]);

  const values = {
    productItem,
    setProduct,
    profile,
    setProfile,
    userListing,
    setUserListing,
    token,
    setToken,
    email,
    setEmail,
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};
export default AuthProvider;
