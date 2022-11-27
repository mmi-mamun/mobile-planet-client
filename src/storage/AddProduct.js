import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleAddProduct = data => {

    }

    return (
        <div className='w-96 p-5 mx-auto'>
            <h1 className='text-4xl my-5 text-orange-600 text-center'>Add a Product</h1>

            <form onSubmit={handleSubmit(handleAddProduct)}>


                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label"> <span className="label-text">Name</span> </label>
                    <input {...register("name", { required: "Name is required" })} placeholder="Your Name" type="text" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label"> <span className="label-text">Email</span> </label>
                    <input {...register("email", { required: "Email Address is required" })} placeholder="Your email" type="email" className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Select your position</span>
                    </label>
                    <select className="select select-bordered" {...register("role")}>
                        <option>Buyer</option>
                        <option>Seller</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label"> <span className="label-text">Password</span> </label>
                    <input {...register("password", { required: "Password required", pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/, message: "Password must be strong. hints: At least one uppercase, one lowercase, one digit and one special character need to provided." }, minLength: { value: 8, message: "Password must be 8 characters or long" } })} placeholder="Your password" type="password" className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                </div>
                <label className="label mx-3"><span className="label-text">Forget Password?</span></label>


                {/* <p>{data}</p> */}
                <input className='btn btn-primary w-full my-4' value="Add Product" type="submit" />

                {/* {signUpError && <p className='text-red-600 mb-5'>{signUpError}</p>} */}
            </form>
        </div>
    );
};

export default AddProduct;