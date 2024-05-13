import Blogs from "./Layouts/Blogs/Blogs";
import Header from "./Layouts/Header/Header";
import Newsletter from "./Layouts/Newsletter/Newsletter";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Blogs></Blogs>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;