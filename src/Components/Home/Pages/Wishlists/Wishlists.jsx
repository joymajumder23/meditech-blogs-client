import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import Wishlist from "../Wishlist/Wishlist";
import Swal from "sweetalert2";
import axios from "axios";

const Wishlists = () => {
    const {user} = useContext(AuthContext);
    const email = user && user?.email;
    console.log(email);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        // fetch(`http://localhost:5000/wishlist/${email}`, {credentials: 'include'})
        // .then(res => res.json())
        // .then(data => {
        //     setBlogs(data)
        // })
        axios.get(`http://localhost:5000/wishlist/${email}`, {withCredentials: true})
        .then(res => setBlogs(res.data))
    },[]);
    console.log(blogs);

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

                fetch(`http://localhost:5000/wishlist/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

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
             <button className="btn">
                Whislist
                <div className="badge">{blogs.length}</div>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {
                    blogs.map(blog => <Wishlist key={blog._id} blog={blog} handleDelete={handleDelete}></Wishlist>)
                }
            </div>
        </div>
    );
};

export default Wishlists;