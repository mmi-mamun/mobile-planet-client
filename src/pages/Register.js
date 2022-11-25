import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = data => {
        console.log(data.name);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)

                toast('User created successfully..');
                ///// for update user /////
                const userInfo = {
                    displayName: data.name,
                    role: data.role
                }
                updateUser(userInfo)
                    .then(() => {
                        // console.log(userInfo);
                        navigate('/');
                    })
                    .catch(error => { console.error(error) })

            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message)
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-5'>
                <h4 className="text-xl text-center">Sign Up</h4>

                <form onSubmit={handleSubmit(handleRegister)}>


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
                    <input className='btn btn-primary w-full my-4' value="Sign Up" type="submit" />

                    {signUpError && <p className='text-red-600 mb-5'>{signUpError}</p>}
                </form>

                <p>Already have an account? <Link to='/login'><span className='text-orange-600'>Please Login</span></Link></p>
                <div className="divider">OR</div>
                <button className="btn  btn-outline w-full">Continue with google</button>
            </div>
        </div>
    );
};

export default Register;