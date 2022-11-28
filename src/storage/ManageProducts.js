import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../components/ConfirmationModal';
import LoadSpinner from '../components/LoadSpinner';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);




    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://used-phone-project-server.vercel.app/products`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }

            catch (error) {

            }
        }
    })

    if (isLoading) {
        return <LoadSpinner></LoadSpinner>
    }


    const closeModal = () => {
        setDeletingProduct(null);
    }

    const handleDeleteProduct = (product) => {
        // console.log(product);
        fetch(`https://used-phone-project-server.vercel.app/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${product.deviceName} is successfully removed...`)
                    refetch();
                }
            })
    }

    const handleAd = (phone) => {
        fetch(`http://localhost:5000/advertise`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(phone)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    toast.success('Product added');
                }
            })
    }

    return (
        <div className='p-5'>
            <h3 className="text-3xl text-center">My Products: {products?.length}</h3>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Device Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Remove device</th>
                            <th>Promote device</th>
                        </tr>
                    </thead>


                    <tbody>
                        {/* <!-- row  --> */}
                        {
                            products.map((product, i) =>
                                <tr key={product._id}>
                                    <td>{i + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.img} alt="Mobile" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="badge badge-ghost badge-lg">{product.deviceName}</span>
                                    </td>

                                    <td>{product.resalePrice}</td>
                                    <td>{product.category}</td>

                                    <td>
                                        <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                    </td>

                                    <td>
                                        <button onClick={() => handleAd(product)} className="btn btn-success btn-xs">Send for advertise</button>
                                    </td>
                                </tr>)
                        }


                    </tbody>

                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure want to delete?`}
                    message={`If you delete ${deletingProduct.deviceName}, it can not be undone`}
                    closeModal={closeModal}
                    successAction={handleDeleteProduct}
                    modalData={deletingProduct}
                    successButtonName="Delete"
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageProducts;