import { FcGoogle } from "react-icons/fc";
import signUp from "../../../../assets/images/signUp.svg"
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // login user
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Login');
                if(result.user){
                    navigate(location?.state? location.state : "/");
                }
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })

            setError('');
    }

    const handleGoogle = () => {
        googleLogin()
        .then(result => {
            toast.success('Successfully Login');
            if(result.user){
                navigate(location?.state? location.state : "/");
            }
            
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleGithub = () => {
        githubLogin()
        .then(result => {
            toast.success('Successfully Login');
            if(result.user){
                navigate(location?.state? location.state : "/");
            }
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login</h1>
                        <img src={signUp} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <div className="divider px-6">OR</div>
                                <div className="flex flex-col w-full lg:flex-row">
                                    <div onClick={handleGoogle} className="btn grid flex-grow h-10 bg-base-300 rounded-box place-items-center text-xl"><FcGoogle></FcGoogle></div>
                                    <div className="divider lg:divider-horizontal"></div>
                                    <div onClick={handleGithub} className="btn text-xl grid flex-grow card bg-base-300 rounded-box place-items-center"><FaGithub></FaGithub></div>
                                </div>
                            </div>
                        </form>
                        <p className='text-center p-4'>Dont have an account? <Link to="/register"><a className="link link-error font-bold">Register</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;