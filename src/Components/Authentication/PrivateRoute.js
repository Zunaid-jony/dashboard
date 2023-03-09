import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const auth = localStorage.getItem("auth");
    // localStorage.setItem("auth",true)
    return(
        auth ? children : <Navigate to="/login"/>
    )
}

export default PrivateRoute



// import { useNavigate, Route } from "react-router-dom";
// import { userInfo } from "./loginStorage";

// const PrivateRoute = ({ component: Component, render, ...rest }) => {
//   const user = userInfo();
//   const navigate = useNavigate();

//   console.log("user---->", user);
//   const authUser = localStorage.getItem("id");

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (typeof user === "undefined") {
//           return null;
//         } else if (user?.id) {
//           return render ? render() : <Component {...props} />;
//         }

//         return authUser ? navigate("/") : navigate("/login");
//       }}
//     />
//   );
// };

// export default PrivateRoute;
