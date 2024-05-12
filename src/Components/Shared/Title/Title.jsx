import { Typewriter } from 'react-simple-typewriter';

const Title = () => {
    return (
        <div>
            <Typewriter
            words={['Blogs are helping to build knowledge']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
    );
};

export default Title;