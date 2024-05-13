import { GoChecklist } from "react-icons/go";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const Blog = ({blog}) => {
    const {title, image, shortDes} = blog;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{shortDes}</p>
                    <div className="card-actions justify-between">
                        <button className="btn btn-primary"><span className="text-xl"><GoChecklist></GoChecklist> </span>Wishlist</button>
                        <Link><button className="btn btn-primary"><span className="text-xl"><TbListDetails></TbListDetails></span>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;