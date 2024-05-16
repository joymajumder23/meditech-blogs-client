import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";

const ViewDetails = () => {
    const {user} = useContext(AuthContext);

    const blog = useLoaderData();
    console.log(blog);

    const {_id, image, title, shortDes, longDes, category, email} = blog;

    // comments section
    const handleComment = e => {
        e.preventDefault();
        const form = e.target;
        const comments = form.comments.value;
        console.log(comments);
    }
    return (
        <div className="container mx-auto max-w-6xl mt-12">
            <div className="grid md:grid-cols-2 gap-5">

                {/* image and title and short description */}
                <div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-title font-medium">{title}</h2>
                            <div className="badge badge-outline font-details">{category}</div>
                            <p className="font-details">{shortDes}</p>
                            <div className="card-actions justify-end">
                               {
                                user && user?.email === email?  <Link to={`/updateBlog/${_id}`}><button className="btn btn-primary">Update</button></Link> : ""
                               }
                            </div>
                        </div>
                    </div>
                </div>
                {/* details */}
                <div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-title font-medium">Details:</h2>
                            <p className="font-details">{longDes}</p>
                        </div>
                    </div>
                </div>
                {/* comments */}
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1 className="text-xl font-title">Comments</h1>
                            <form onSubmit={handleComment} action="">
                                <textarea placeholder="Comments here" className="textarea textarea-bordered textarea-lg w-full" name="comments" ></textarea>
                                <br />
                                <input className="btn" type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;