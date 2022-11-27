import { createBrowserRouter } from "react-router-dom";
import Blog from "../blogSection/Blog";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Phones from "../pages/Phones";
import Register from "../pages/Register";
import AddProduct from "../storage/AddProduct";
import AllAdmin from "../storage/AllAdmin";
import AllBuyers from "../storage/AllBuyers";
import AllSellers from "../storage/AllSellers";
import AllUsers from "../storage/AllUsers";
import ManageProducts from "../storage/ManageProducts";
import MyOrders from "../storage/MyOrders";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                element: <Phones></Phones>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/admin',
                element: <AdminRoute><AllAdmin></AllAdmin></AdminRoute>
            },
            {
                path: '/dashboard/sellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
            },
            {
                path: '/dashboard/my-products',
                element: <AdminRoute><ManageProducts></ManageProducts></AdminRoute>
            }
        ]
    }
])

export default router;