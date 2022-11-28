import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([]);
    useEffect(() => {
        fetch(`https://used-phone-project-server.vercel.app/users/Buyer`)
            .then(res => res.json())
            .then(data => setBuyers(data))
    }, [buyers])
    console.log(buyers)
    return (
        <div>
            <h2 className="text-4xl text-orange-600 text-center my-5">All Buyers</h2>

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
                            buyers?.map((user, i) => <tr key={user._id} className="hover">
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

export default AllBuyers;