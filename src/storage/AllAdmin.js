import React, { useEffect, useState } from 'react';

const AllAdmin = () => {
    const [allAdmin, setAllAdmin] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/users/Admin`)
            .then(res => res.json())
            .then(data => setAllAdmin(data))
    }, [allAdmin])

    return (
        <div>
            <h2 className="text-4xl text-orange-600 text-center my-5">All admin</h2>

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
                            allAdmin?.map((admin, i) => <tr key={admin._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{admin.name}</td>
                                <td>{admin.email}</td>
                                <td>{admin.role}</td>
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

export default AllAdmin;