import { useLoaderData } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";

const AllBlogs = () => {
    const blogs = useLoaderData();
    console.log(blogs);
    return (
        <div className="container mx-auto max-w-6xl">
            <button className="btn">
                Blogs
                <div className="badge">{blogs.length}</div>
            </button>
            <div className="grid grid-cols-2 gap-4 mt-2">
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;