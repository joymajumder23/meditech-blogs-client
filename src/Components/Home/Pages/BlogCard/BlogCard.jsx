import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";
import Swal from "sweetalert2";

const BlogCard = ({blog}) => {
    // console.log(blog);
    const {user} = useContext(AuthContext);
    const {_id, title, category, shortDes, image} = blog;
    const details = shortDes.slice(0,90);
    // console.log(details);
    const handleWishlist = () => {
        const wishList = {
            blogId: _id,
            title,
            image,
            shortDes,
            category,
            email: user?.email
        };

        fetch('https://blog-web-server-omega.vercel.app/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishList)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
        })

    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="" className="w-96 h-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className={`badge ${category === "Medical" && "bg-orange-600 bg-opacity-50"} ${category === "Technology" && "bg-blue-600 bg-opacity-50"}`}>{category}</div>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        {
                            user && <button onClick={handleWishlist} className="btn bg-green-400">Wishlist</button>
                        }
                       <Link to={`/viewDetails/${_id}`}><button className="btn bg-green-400">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;