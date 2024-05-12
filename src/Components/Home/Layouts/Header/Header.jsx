import Slider from "../../../Shared/Slider/Slider";
import Title from "../../../Shared/Title/Title";

const Header = () => {
    return (
        <div className="relative">
            <Slider></Slider>
            <div className="text-3xl absolute -mt-96 text-start ml-20 text-white">
                <h1 className="text-8xl font-bold">Welcome to MediTech</h1>
            <Title></Title>
            </div>
        </div>
    );
};

export default Header;