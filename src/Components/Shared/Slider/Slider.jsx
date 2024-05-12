import { Carousel } from 'antd';
import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.jpg";
import img3 from "../../../assets/images/3.jpg";
import img4 from "../../../assets/images/4.jpg";

const Slider = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
      <img className='w-full' src={img1} alt="" />
        {/* <h3 style={contentStyle}>{img1}</h3> */}
      </div>
      <div>
      <img className='w-full'  src={img2} alt="" />
        {/* <h3 style={contentStyle}>{img2}</h3> */}
      </div>
      <div>
      <img className='w-full'  src={img3} alt="" />
        {/* <h3 style={contentStyle}>{img3}</h3> */}
      </div>
      <div>
        <img className='w-full'  src={img4} alt="" />
        {/* <h3 style={contentStyle}>{img4}</h3> */}
      </div>
    </Carousel>
  );
};
export default Slider;