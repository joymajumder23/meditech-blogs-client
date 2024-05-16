import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { GrUpdate } from "react-icons/gr";
import { Helmet } from "react-helmet-async";

const ViewDetails = () => {
    const {user} = useContext(AuthContext);

    const blog = useLoaderData();
    // console.log(blog);
    const [commentUser, setCommentUser] = useState([]);

    const {_id, image, title, shortDes, longDes, category, email} = blog;

    useEffect(() => {
        axios.get(`https://blog-web-server-omega.vercel.app/comments/${_id}`)
        .then(res => setCommentUser(res.data))
    },[_id])
    // console.log(commentUser);
    // comments section
    const handleComment = e => {
        e.preventDefault();
        if(user?.email === blog.email)
            return toast.error('Can not comment on own blog');
        const form = e.target;
        const comments = form.comments.value;
        // console.log(comments);
        const commentData = {userName: user?.displayName,
            userImage: user?.photoURL, blogId: _id, comments};
            // console.log(commentData);

        axios.post('https://blog-web-server-omega.vercel.app/comments', commentData)
        .then(res => {
            if (res.data.insertedId) {
                toast.success("Send")
                form.reset();
            }
        })
    }



    return (
        <div className="container mx-auto max-w-6xl mt-12">
            <Helmet>
                <title>Home | View Details</title>
            </Helmet>
            <div className="grid md:grid-cols-2 gap-5">

                {/* image and title and short description */}
                <div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-title font-medium">{title}</h2>
                            <div className={`badge ${category === "Medical" && "bg-orange-600 bg-opacity-50"} ${category === "Technology" && "bg-blue-600 bg-opacity-50"}`}>{category}</div>
                            <p className="font-details">{shortDes}</p>
                            <div className="card-actions justify-end">
                               {
                                user && user?.email === email?  <Link to={`/updateBlog/${_id}`}><button className="btn bg-yellow-400 font-details"><GrUpdate></GrUpdate> Update</button></Link> : ""
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
                   <div>
                   <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="" src={commentUser?.userImage}/>
                    </div>
                </div>
                <div className="chat-header">
                    {commentUser?.userName}
                </div>
                <div className="chat-bubble">{commentUser?.comments}</div>
            </div>
                   </div>
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
            <Toaster></Toaster>
        </div>
    );
};

export default ViewDetails;