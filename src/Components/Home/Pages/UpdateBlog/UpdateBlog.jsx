import { useLoaderData } from "react-router-dom";
import updateUI from "../../../../assets/images/updateUI.svg";
import Swal from "sweetalert2";


const UpdateBlog = () => {
    const blogsData = useLoaderData();
    console.log(blogsData);
    const {_id, title, image, category, shortDes, longDes} = blogsData;

    
    const handleUpdate = e => {
        e.preventDefault();
        console.log(e);
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const category = form.category.value;
        const shortDes = form.shortDes.value;
        const longDes = form.longDes.value;
        // const email = form.email.value;
        const newBlog = {title, image, category, shortDes, longDes};
        // console.log(newBlog);
        fetch(`http://localhost:5000/blogs/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    window.location.reload()
                }
                
            })
    }
    
    return (
        <div className="flex flex-row-reverse gap-4 items-center container mx-auto mt-12 max-w-6xl">
            <div>
                <img src={updateUI} alt="" />
            </div>
            <div className="lg:w-3/4 border-dotted border-red-200 border-2 p-6">
                <form onSubmit={handleUpdate} className="card-body">
                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="enter your title" className="input input-bordered" name="title" defaultValue={title} required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select type="dropdown" placeholder="select category" className="input input-bordered" name="category" defaultValue={category} required>
                                <option selected>Choose Category</option>
                                <option value="Medical">Medical</option>
                                <option value="Technology">Technology</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-4">
                       
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" placeholder="enter your image url" className="input input-bordered" name="image" defaultValue={image} required />
                        </div>
                        {/* <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="enter email" className="input input-bordered" name="email" defaultValue={userEmail} required />
                        </div> */}
                    </div>
                    <div className="w-full">
                        <label className="label w-full">
                            <span className="label-text">Short Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Short Description" name="shortDes" defaultValue={shortDes}></textarea>
                    </div>
                    <div className="w-full">
                        <label className="label w-full">
                            <span className="label-text">Long Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Long Description" name="longDes" defaultValue={longDes}></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default UpdateBlog;