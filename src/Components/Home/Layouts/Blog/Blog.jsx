import { GoChecklist } from "react-icons/go";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const Blog = ({blog}) => {
    const {_id, title, image, shortDes, category} = blog;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-title font-medium">{title}</h2>
                    <div className="badge badge-outline">{category}</div>
                    <p className="font-details">{shortDes}</p>
                    <div className="card-actions justify-between">
                        <button className="btn bg-green-400"><span className="text-xl"><GoChecklist></GoChecklist> </span>Wishlist</button>
                        <Link to={`/viewDetails/${_id}`}><button className="btn bg-green-600 text-white font-details"><span className="text-xl font-details"><TbListDetails></TbListDetails></span>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;