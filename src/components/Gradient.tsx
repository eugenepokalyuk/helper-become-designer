import React from 'react';
import GradientImage from '../assets/images/gradient.webp';

const Gradient: React.FC = () => {
    return (
        <div className="absolute w-full h-[350vh] z-[-10]">
            <img src={GradientImage} alt="gradient image" className='w-full h-full' />
        </div>
    );
};

export default Gradient;
