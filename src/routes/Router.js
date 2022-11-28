import { createBrowserRouter } from "react-router-dom";
import Blog from "../blogSection/Blog";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Phones from "../pages/Phones";
import Register from "../pages/Register";
import DisplayError from "../shared/DisplayError";
import FourOFour from "../shared/FourOFour";
import AddProduct from "../storage/AddProduct";
import AllAdmin from "../storage/AllAdmin";
import AllBuyers from "../storage/AllBuyers";
import AllSellers from "../storage/AllSellers";
import AllUsers from "../storage/AllUsers";
import ManageProducts from "../storage/ManageProducts";
import MyOrders from "../storage/MyOrders";
import Payment from "../storage/Payment";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
            }, {
                path: '*',
                element: <FourOFour></FourOFour>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/my-orders',
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
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://used-phone-project-server.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])

export default router;