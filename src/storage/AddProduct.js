import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    //image hosting
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);

    const handleAddProduct = data => {
        console.log(data.img[0]);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData)
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const product = {
                        deviceName: data.deviceName,
                        sellerName: data.sellerName,
                        resalePrice: data.resalePrice,
                        originalPrice: data.originalPrice,
                        yearsOfUse: data.yearsOfUse,
                        postedDate: data.postedDate,
                        category: data.category,
                        Contact: data.Contact,
                        Location: data.Location,
                        img: imgData.data.url
                    }

                    //save product information to the database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.deviceName} is added successfully`);

                            navigate('/dashboard/my-products');
                        })
                }
            })
    }

    return (
        <div className='w-96 p-5 mx-auto'>
            <h1 className='text-4xl my-5 text-orange-600 text-center'>Add a Product</h1>

            <form onSubmit={handleSubmit(handleAddProduct)}>

                {/* Device */}
                <div className="form-control w-full max-w-xs mx-auto my-3">
                    <label className="label"> <span className="label-text text-purple-600 font-semibold">Device Name</span> </label>
                    <input {...register("deviceName", { required: "Device name is required" })} placeholder="Device Name" type="text" className="input input-bordered w-full max-w-xs" />
                    {errors.deviceName && <p className='text-red-600'>{errors.deviceName.message}</p>}
                </div>

                {/* Seller  */}
                <div className="form-control w-full max-w-xs mx-auto my-3">
                    <label className="label"> <span className="label-text text-purple-600 font-semibold">Your Name</span> </label>
                    <input {...register("sellerName", { required: "Seller name is required" })} placeholder="Seller Name" type="text" className="input input-bordered w-full max-w-xs" />
                    {errors.sellerName && <p className='text-red-600'>{errors.sellerName.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs mx-auto my-3">
                    <label className="label">
                        <span className="label-text text-purple-600 font-semibold">Select device Category</span>
                    </label>
                    <select className="select select-bordered" {...register("category")}>
                        <option>feature-phone</option>
                        <option>smartphone</option>
                        <option>tablet</option>
                    </select>
                </div>


                <div className="form-control w-full max-w-xs mx-auto my-3">
                    <label className="label">
                        <span className="label-text text-purple-600 font-semibold">Share the condition of device</span>
                    </label>
                    <select className="select select-bordered" {...register("condition")}>
                        <option>excellent</option>
                        <option>good</option>
                        <option>fair</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs mx-auto my-3">
                    <label className="label"> <span className="label-text text-purple-600 font-semibold">Set expected price of your device</span> </label>
                    <input {...register("resalePrice", { required: "Resale price is required" })} placeholder="Price of your device" type="number" className="input input-bordered w-full max-w-xs" />
                    {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs mx-auto my-3">
                    <label className="label"> <span className="label-text text-purple-600 font-semibold">Original price in market</span> </label>
                    <input {...register("originalPrice", { required: "Original price is required" })} placeholder="Original price" type="number" className="input input-bordered w-full max-w-xs" />
                    {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs mx-auto my-3">
                    <label className="label"> <span className="label-text text-purple-600 font-semibold">Share the duration of use this device</span> </label>
                    <input {...register("yearsOfUse", { required: "Duration is required" })} placeholder="Years of use" type="number" className="input input-bordered w-full max-w-xs" />
                    {errors.yearsOfUse && <p className='text-red-600'>{errors.yearsOfUse.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs mx-auto my-3">
                    <label className="label"> <span className="label-text text-purple-600 font-semibold">Your contact number</span> </label>
                    <input {...register("Contact", { required: "Contact number is required" })} placeholder="Contact number" type="number" className="input input-bordered w-full max-w-xs" />
                    {errors.Contact && <p className='text-red-600'>{errors.Contact.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs mx-auto my-3">
                    <label className="label"> <span className="label-text text-purple-600 font-semibold">Location</span> </label>
                    <input {...register("Location", { required: "Location is required" })} placeholder="Your location" type="text" className="input input-bordered w-full max-w-xs" />
                    {errors.Location && <p className='text-red-600'>{errors.Location.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs mx-auto my-3">
                    <label className="label"> <span className="label-text text-purple-600 font-semibold">Write descriptions of this product</span> </label>
                    <input {...register("description", { required: "Description is required" })} placeholder="Description" type="text" className="input input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-600'>{errors.description.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs mx-auto my-3">
                    <label className="label"> <span className="label-text text-purple-600 font-semibold">Provide today's date</span> </label>
                    <input {...register("postedDate", { required: "Date is required" })} placeholder="postedDate" type="text" className="input input-bordered w-full max-w-xs" />
                    {errors.postedDate && <p className='text-red-600'>{errors.postedDate.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs mx-auto my-3">
                    <label className="label"> <span className="label-text text-purple-600 font-semibold">Image of the device</span> </label>
                    <input {...register("img", { required: "Photo is required" })} placeholder="Image" type="file" className="input w-full max-w-xs" />
                    {errors.img && <p className='text-red-600'>{errors.img.message}</p>}
                </div>




                {/* <p>{data}</p> */}
                <input className='btn btn-primary w-full my-4' value="Add Product" type="submit" />

                {/* {signUpError && <p className='text-red-600 mb-5'>{signUpError}</p>} */}
            </form>
        </div>
    );
};

export default AddProduct;