import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AuthProvider from "../providers/AuthProvider";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import PrivateRoutes from "./PrivateRoutes";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthProvider><App></App></AuthProvider>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/profile",
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
            {
                path: "/add-product",
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path: "/my-cart",
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>
            }
        ]
    }
]);

export default router;
