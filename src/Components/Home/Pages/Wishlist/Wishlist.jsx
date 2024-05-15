import { Link } from "react-router-dom";

const Wishlist = ({blog, handleDelete}) => {
    console.log(blog);
    const {_id, blogId, title, category, shortDes, image} = blog;
    
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="" className="w-96 h-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className={`badge ${category === "Medical" && "bg-orange-600 bg-opacity-50"} ${category === "Technology" && "bg-blue-600 bg-opacity-50"}`}>{category}</div>
                    <p>{shortDes}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-400">Remove</button>
                       <Link to={`/viewDetails/${blogId}`}><button className="btn bg-green-400">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;