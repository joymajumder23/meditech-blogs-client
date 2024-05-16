import { useLoaderData } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variant";
import { useState } from "react";

const AllBlogs = () => {
    const blogs = useLoaderData();
    console.log(blogs);
    const [dataLength, setDataLength] = useState(4);
    return (
        <div className="container mx-auto max-w-6xl mt-12">
            <button className="btn">
                Blogs
                <div className="badge">{blogs.length}</div>
            </button>
            <motion.div
            variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className="grid grid-cols-2 gap-4 mt-2">
                {
                    blogs.slice(0, dataLength).map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </motion.div>
            <motion.div 
            variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}}>
                <button onClick={() => setDataLength(blogs.length)} className={`btn bg-green-500 ${dataLength === blogs.length && 'hidden'}`}>Show All</button>
            </motion.div>
        </div>
    );
};

export default AllBlogs;