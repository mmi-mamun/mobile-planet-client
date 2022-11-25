
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, data } = useForm();
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
                        <input {...register("email")} placeholder="Your email" type="email" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input {...register("password")} placeholder="Your password" type="password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <label className="label mx-3"><span className="label-text">Forget Password?</span></label>


                    <p>{data}</p>
                    <input className='btn btn-accent w-full' value="login" type="submit" />
                </form>

                <p>New to mobile planet? <Link><span className='text-orange-600'>Create an account</span></Link></p>
                <div className="divider">OR</div>
                <button className="btn  btn-outline w-full">Continue with google</button>
            </div>
        </div>
    );
};

export default Login;