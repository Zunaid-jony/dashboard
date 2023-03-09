import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ContractUs from "./Components/Contract/ContractUs";
import Dashboard from "./dashboard/Dashboard";
import DashbordHome from "./dashboard/DashbordHome";
import Customer from "./dashboard/Customer/Customer";
import AddCustomaer from "./dashboard/Customer/AddCustomaer";
import CustomarTwo from "./dashboard/Customer/CustomarTwo";
import Product from "./dashboard/Product/Product";
import AddProdcut from "./dashboard/Product/AddProdcut";
import Order from "./dashboard/Order/Order";
import AddOrder from "./dashboard/Order/AddOrder";
import Invoice from "./dashboard/Invoice/Invoice";
import AddInvoice from "./dashboard/Invoice/AddInvoice";
import { Todo } from "./dashboard/Todo/Todo";
import Calendar from "./dashboard/Calendar/Calendar";
import Chat from "./dashboard/Chat/Chat";
import Profile from "./dashboard/Profile/Profile";
import Login from "./Components/Authentication/Login";
import Registration from "./Components/Authentication/Registration";
import ResetPassword from "./Components/Authentication/ResetPassword";
import ConfirmMail from "./Components/Authentication/ConfirmMail";
import Listing from "./Components/Header/Footer/Listing";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import AllProduct from "./Components/AllProduct/AllProduct";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { ToastContainer } from "react-toastify";

import AllPost from "./dashboard/User/Posts/AllPost";
import Categories from "./dashboard/User/Posts/Categories";
import Comments from "./dashboard/Comments/Comments";
import Gallery from "./dashboard/Media/Gallery";
import AddNew from "./dashboard/Media/AddNew";
import BloagePost from "./dashboard/Blocg/BloagePost";
import BlogAll from "./dashboard/Blocg/BlogAll";
import UserRoll from "./Components/Authentication/UserRoll";
import AddUser2 from "./dashboard/User/AddUser2";
import AddUser from "./Components/Authentication/AddUser";
import AllProducts from "./dashboard/Products/AllProducts";
import AddProducts from "./dashboard/Products/AddProducts";
import Contract from "./Components/Home/Contract";
import CategoryDitails from "./dashboard/Products/CategoryDitails/CategoryDitails";
import PrivateRoute from "./Components/Authentication/PrivateRoute";
import EditProduct from "./dashboard/Products/EditProduct";
import EditCategoris from "./dashboard/User/Posts/EditCategoris";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home></Home>}></Route> */}
            <Route path="/catagori" element={<ContractUs></ContractUs>}></Route>
            <Route path="/about" element={<Listing></Listing>}></Route>
            <Route path="/contract" element={<Contract></Contract>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route
              path="/categoryDitails"
              element={<CategoryDitails></CategoryDitails>}
            ></Route>

            <Route
              path="/ResetPassword"
              element={<ResetPassword></ResetPassword>}
            ></Route>
            {/* <Route path="/allProduct" element={<AllProduct></AllProduct>}></Route> */}

            <Route
              path="/ConfirmMail"
              element={<ConfirmMail></ConfirmMail>}
            ></Route>

            <Route
              path="/product/:id"
              element={<ProductDetails></ProductDetails>}
            ></Route>

            
            <Route
              path="/"
              element={
                <PrivateRoute>   <Dashboard></Dashboard></PrivateRoute>
                
                  
                
                
              }
            >
              {/* <Route index element={<DHome></DHome>}></Route> */}

              <Route
                path="userProfile"
                element={<DashbordHome></DashbordHome>}
              ></Route>
              <Route path="allPost" element={<AllPost></AllPost>}></Route>
              <Route
                path="categories"
                element={<Categories></Categories>}
              ></Route>

              <Route path="userRoll" element={<UserRoll></UserRoll>}></Route>
              <Route
                path="addNew"
                element={<AddProducts></AddProducts>}
              ></Route>
              <Route
                index
                element={<AllProducts></AllProducts>}
              ></Route>
              <Route
                path="allProduct"
                element={<AllProducts></AllProducts>}
              ></Route>
              <Route path="addUser" element={<AddUser></AddUser>}></Route>
              <Route path="comments" element={<Comments></Comments>}></Route>
              <Route path="gallery" element={<Gallery></Gallery>}></Route>
              <Route path="newAdd" element={<AddNew></AddNew>}></Route>
              
              <Route
                path="blogPost"
                element={<BloagePost></BloagePost>}
              ></Route>
              <Route path="blogAll" element={<BlogAll></BlogAll>}></Route>
              <Route path="customer" element={<Customer></Customer>}></Route>
              <Route
                path="addCustomer"
                element={<AddCustomaer></AddCustomaer>}
              ></Route>
              <Route
                path="Customer"
                element={<CustomarTwo></CustomarTwo>}
              ></Route>
              <Route path="product" element={<Product></Product>}></Route>
              <Route path="add-user" element={<AddUser></AddUser>}></Route>
              <Route
                path="addProduct"
                element={<AddProdcut></AddProdcut>}
              ></Route>
              <Route path="order" element={<Order></Order>}></Route>
              <Route path="addOrder" element={<AddOrder></AddOrder>}></Route>
              <Route path="invoice" element={<Invoice></Invoice>}></Route>
              <Route
                path="addInvoice"
                element={<AddInvoice></AddInvoice>}
              ></Route>
              <Route path="todo" element={<Todo></Todo>}></Route>
              <Route path="calendar" element={<Calendar></Calendar>}></Route>
              <Route path="chat" element={<Chat></Chat>}></Route>
              <Route path="profile" element={<Profile></Profile>}></Route>
              <Route path="/edit-product/:id" element={<EditProduct></EditProduct>}></Route>
              <Route path="editCategoris/:id" element={<EditCategoris></EditCategoris>}></Route>
            </Route>


            
            <Route path="/login" element={<Login></Login>}></Route>
            <Route
              path="/Registration"
              element={<Registration></Registration>}
            ></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <ToastContainer />
      </AuthProvider>

      {/* )} */}

      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    </div>
  );
}

export default App;
