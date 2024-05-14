import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {

    const blog = useLoaderData();
    console.log(blog);

    const {image, title, shortDes, longDes, category} = blog;
    return (
        <div className="container mx-auto">
            <h1>View Details</h1>
            <div className="grid grid-cols-2 gap-5">

                {/* image and title and short description */}
                <div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-title font-medium">{title}</h2>
                            <div className="badge badge-outline font-details">{category}</div>
                            <p className="font-details">{shortDes}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
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
                            <form action="">
                                <textarea placeholder="Comments here" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
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