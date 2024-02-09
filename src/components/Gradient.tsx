import React from 'react';
import GradientImage from '../assets/images/gradient.png';

const Gradient: React.FC = () => {
    return (
        <div className="absolute w-screen h-[250vh] z-[-10]">
            {/* <div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent via-blue-300 to-transparent -inset-1 opacity-25" /> */}
            <img src={GradientImage} alt="" className='w-full h-full' />
        </div>
    );
};

export default Gradient;
