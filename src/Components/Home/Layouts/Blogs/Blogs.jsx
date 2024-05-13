import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBlogs(data);
        })
    },[])
    return (
        <div className="container mx-auto">
            <h1 className="text-title text-5xl font-bold text-center">Trending Blogs</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;