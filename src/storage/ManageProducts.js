import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../components/ConfirmationModal';
import LoadSpinner from '../components/LoadSpinner';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }

    const handleDeleteProduct = (product) => {
        console.log(product);
    }

    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/products`, {
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
                                        <button className="btn btn-success btn-xs">Send for advertise</button>
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
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageProducts;