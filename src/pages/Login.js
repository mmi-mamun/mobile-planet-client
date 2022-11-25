
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-5'>
                <h4 className="text-xl text-center">Login</h4>

                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input {...register("email", { required: "Email Address is required" })} placeholder="Your email" type="email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input {...register("password", { required: "Password required", minLength: { value: 8, message: "Password must be 8 characters or long" } })} placeholder="Your password" type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <label className="label mx-3"><span className="label-text">Forget Password?</span></label>


                    <input className='btn btn-accent w-full' value="login" type="submit" />
                </form>

                <p>New to mobile planet? <Link to='/register'><span className='text-orange-600'>Create an account</span></Link></p>
                <div className="divider">OR</div>
                <button className="btn  btn-outline w-full">Continue with google</button>
            </div>
        </div>
    );
};

export default Login;