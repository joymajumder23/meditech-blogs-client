import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import { motion } from "framer-motion"
import {fadeIn} from "../../../../variant"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://blog-web-server-omega.vercel.app/blogs')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setBlogs(data);
        })
    },[])
    return (
        <div className="container mx-auto mt-24 max-w-6xl">
            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.2}}>
            <h1 className="text-title text-5xl font-bold text-center">Trending Blogs</h1>
            </motion.div>
            
            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
                {
                    blogs.slice(0, 6).map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
                <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}}>
                   <Link to="/allBlogs"> <button className="btn bg-green-500"><FaArrowRight></FaArrowRight> Show All</button></Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Blogs;