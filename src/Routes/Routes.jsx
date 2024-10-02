import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: 'menu', 
          element: <Menu />
        },
        {
          path: 'order/:category', 
          element: <Order />
        },
        {
          path: 'login', 
          element: <Login />
        },
        {
          path: 'signup',  
          element: <Signup />
        },
        {
          path: 'secret',  
          element: <PrivateRoute> <Secret /> </PrivateRoute>
        },
      ]
    },
    // Dashboard routes
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
      children: [
        // User Routes
        {
          path: "cart",
          element: <Cart />,
        },
        // Admin Only Routes
        {
          path: "addItems",
          element: <AdminRoute><AddItems /></AdminRoute>,
        },
        {
          path: "users",
          element: <AdminRoute><AllUsers /></AdminRoute>,
        }
      ],
    }
  ]);