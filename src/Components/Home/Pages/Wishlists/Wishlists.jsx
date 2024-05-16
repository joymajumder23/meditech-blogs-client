import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import Wishlist from "../Wishlist/Wishlist";
import Swal from "sweetalert2";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variant";
import { FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Wishlists = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    // console.log(email);
    const [blogs, setBlogs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        // fetch(`https://blog-web-server-omega.vercel.app/wishlist/${email}`, {credentials: 'include'})
        // .then(res => res.json())
        // .then(data => {
        //     setBlogs(data)
        // })
        axios.get(`https://blog-web-server-omega.vercel.app/wishlist/${email}`, { withCredentials: true })
            .then(res => setBlogs(res.data))
    }, []);
    // console.log(blogs);

    // delete
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://blog-web-server-omega.vercel.app/wishlist/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = blogs.filter(blog => blog._id !== id);
                        setBlogs(remaining);
                    })
            }
        });

    }



    return (
        <div className="container mx-auto max-w-6xl">
            <Helmet>
                <title>Home | Wishlists</title>
            </Helmet>
            <button className="btn">
                Whislist
                <div className="badge">{blogs.length}</div>
            </button>
            <motion.div
                variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {
                    blogs.slice(0, dataLength).map(blog => <Wishlist key={blog._id} blog={blog} handleDelete={handleDelete}></Wishlist>)
                }
            </motion.div>
            <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
                <button onClick={() => setDataLength(blogs.length)} className={`btn bg-green-500 ${dataLength === blogs.length && 'hidden'}`} ><FaArrowRight></FaArrowRight> Show All</button>
            </motion.div>
        </div>
    );
};

export default Wishlists;