import toast from "react-hot-toast";

const Newsletter = () => {
    const handleNewsletter = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        if(email){
            toast.success("Thank you for subscribing for our newsletter");
        }
        form.reset();
    }
    return (
        <div className="hero mt-24" style={{ backgroundImage: 'url(../../src/assets/images/2.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full lg:h-60 lg:p-12">
                    <h1 className="mb-5 text-xl lg:text-7xl font-bold font-title">Newsletter</h1>
                    <p className="mb-5">Please Subscribe Our Newsletter</p>
                    <div className="font-details w-full">
                        <form onSubmit={handleNewsletter} className="join w-full">
                            <input name="email" className="input input-bordered join-item bg-transparent border-green-400 border-2 w-full px-10" placeholder="Email Address" />
                            <button className="btn join-item rounded-r-full bg-green-400 border-none text-white px-10 text-xl">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;