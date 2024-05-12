import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
    const {user, logOutUser} = useContext(AuthContext);

    const handleLogout = () => {
        logOutUser()
        .then(() => {
            toast.success("Logout");
        })
        .catch(error => {
            toast.error(error.message);
        })
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addBlogs">Add Blogs</NavLink></li>
        <li><NavLink to="/allBlogs">All Blogs</NavLink></li>
        <li><NavLink to="/featuredBlogs">Featured Blogs</NavLink></li>
        <li><NavLink to="/wishlist">Wishlist</NavLink></li>
    </>
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-details">MediTech</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-details">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user? <img alt="Tailwind CSS Navbar component" src={user?.photoURL} /> : ""
                                }
                            </div>
                        </div>
                    </div>
                    {
                        user? <button onClick={handleLogout} className="btn">Logout</button> : <Link to="/login" className="btn">Login</Link>
                    }
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default Navbar;