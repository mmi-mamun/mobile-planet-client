import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    const menuItems = <React.Fragment>
        <li><Link className='font-semibold' to='/'>Home</Link></li>
        <li><Link className='font-semibold' to='/dashboard'>Dashboard</Link></li>
        <li><Link className='font-semibold' to='/blog'>Blog</Link></li>

        {
            user?.uid ?
                <>
                    <li><Link className='font-semibold' to='/fourOfour'>404</Link></li>
                    <li><button className='font-semibold' onClick={handleLogout}>Sign out</button></li>
                </> :
                <>
                    <li><Link className='font-semibold' to='/register'>Sign up</Link></li>
                    <li><Link className='font-semibold' to='/login'>Login</Link></li>
                </>

        }

    </React.Fragment>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">

                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Mobile Planet</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/' className="btn">
                    {user?.uid ? <p>{user.displayName}</p> : <p>Unregistered User</p>}
                </Link>
            </div>

            {/* For Dashboard drawer  */}
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;