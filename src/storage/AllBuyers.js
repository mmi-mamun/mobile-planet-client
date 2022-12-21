import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/users/Buyer`)
            .then(res => res.json())
            .then(data => setBuyers(data))
    }, [buyers])
    // console.log(buyers)

    const handleDeleteUser = (email) => {
        // console.log(product);
        const deleteConfirmation = window.confirm('Do you want to delete the user?');
        if (deleteConfirmation) {
            fetch(`http://localhost:5000/users/${email}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success(`successfully removed...`)
                        // refetch();
                    }
                })
        }

    }
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
                            <th>Action</th>
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
                                <td><button onClick={() => handleDeleteUser(user?.email)} className='btn btn-danger btn-xs rounded'>Delete User</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;