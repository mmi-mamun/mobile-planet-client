import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../shared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>



                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        {isAdmin &&
                            <>
                                <li><Link to='/dashboard/users'>All Users</Link></li>
                                <li><Link to='/dashboard/admin'>All Admin</Link></li>
                                <li><Link to='/dashboard/sellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/buyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/addProduct'>All a product</Link></li>
                            </>}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;