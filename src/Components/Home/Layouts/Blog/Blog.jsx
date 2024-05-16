import { GoChecklist } from "react-icons/go";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";


const Blog = ({blog}) => {
    const {user} = useContext(AuthContext);
    const {_id, title, image, shortDes, category} = blog;

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 hover:shadow-2xl hover:scale-[1.05] transition-all">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image || <Skeleton/>} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-title font-medium">{title}</h2>
                    <div className={`badge ${category === "Medical" && "bg-orange-600 bg-opacity-50"} ${category === "Technology" && "bg-blue-600 bg-opacity-50"}`}>{category || <Skeleton/>}</div>
                    <p className="font-details">{shortDes || <Skeleton/>}</p>
                    <div className="card-actions justify-between">
                        <button onClick={handleWishlist} className="btn bg-green-400"><span className="text-xl"><GoChecklist></GoChecklist> </span>Wishlist</button>
                        <Link to={`/viewDetails/${_id}`}><button className="btn bg-green-600 text-white font-details outline-dashed outline-green-400"><span className="text-xl font-details"><TbListDetails></TbListDetails></span>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;