import React, { useEffect, useState } from 'react';

const AllSellers = () => {

    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        fetch(`https://used-phone-project-server.vercel.app/users/Seller`)
            .then(res => res.json())
            .then(data => setSellers(data))
    }, [sellers])
    console.log(sellers)

    return (
        <div>
            <h2 className="text-4xl text-orange-600 text-center my-5">All Sellers</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map((user, i) => <tr key={user._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                {/* <td>{user?.role !== 'Admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-primary btn-xs rounded'>Make Admin</button>}</td>
                                <td><button className='btn btn-danger btn-xs rounded'>Delete User</button></td> */}
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;