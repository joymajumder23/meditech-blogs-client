import { Carousel } from 'antd';
import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.jpg";
import img3 from "../../../assets/images/3.jpg";
import img4 from "../../../assets/images/4.jpg";

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Slider = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
      <img src={img1} alt="" />
        {/* <h3 style={contentStyle}>{img1}</h3> */}
      </div>
      <div>
      <img src={img2} alt="" />
        {/* <h3 style={contentStyle}>{img2}</h3> */}
      </div>
      <div>
      <img src={img3} alt="" />
        {/* <h3 style={contentStyle}>{img3}</h3> */}
      </div>
      <div>
        <img src={img4} alt="" />
        {/* <h3 style={contentStyle}>{img4}</h3> */}
      </div>
    </Carousel>
  );
};
export default Slider;