import { Link, useNavigate } from "react-router-dom";
import signUp1 from "../../../../assets/images/signUp2.svg"
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../../provider/AuthProvider";

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    // const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) => {
        const {email, password, name, image, confirmPassword} = data;

        if(password.length < 6){
                    setError('password must be 6 characters');
                    return;
                }
        
                else if(password !== confirmPassword){
                    setError('password did not matched');
                    toast.error('password did not matched');
                    return;
                }
                else if(!/(?=.*[A-Z])/.test(password)){
                    setError('must have an Uppercase letter in the password');
                    return;
                }
                else if(!/^(?=.*[a-z]).+$/.test(password)){
                    setError('must have an Lowercase letter in the password');
                    return;
                }
                setError("");
               // setSuccess("");

       // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                
                // update user
                updateUser(name, image)
                .then(()=> {
                    toast.success('Successfuly registered');
                    navigate("/");
                })
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
        };
    return (
        <div>
             <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <img src={signUp1} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="full name" className="input input-bordered rounded-none" 
                                {...register("name", { required: true })} />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered rounded-none" 
                                {...register("email", { required: true })} />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='image' placeholder="photo url" className="input input-bordered rounded-none" {...register("image", { required: true })} />
                                {errors.image && <span className='text-red-600'>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered rounded-none" 
                                {...register("password", { required: true })} />
                                {errors.password && <span className='text-red-600'>This field is required</span>}
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input name='confirmPassword' type="password" placeholder="password" className="input input-bordered rounded-none" {...register("confirmPassword", { required: true })} />
                                {errors.confirmPassword && <span className='text-red-600'>This field is required</span>}
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                                {/* {
                                    error && <p className='text-red-600'>{error}</p>
                                } */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded-none">Register</button>
                            </div>
                        </form>
                        {/* {
                            success && <p>{success}</p>
                        } */}
                        {
                            error && <p className='text-red-600 ml-8'>{error}</p>
                        }
                        <p className='text-center p-4'>Have an account? <Link to="/login"><a className="link link-error font-bold">Login</a></Link></p>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Register;