import React from 'react';
import CustomUnderline from '../assets/underline.png';

const RealtimeDesignBanner: React.FC = () => {
    return (
        <div>
            <p className="font-[500] md:text-[20px] md:text-[32px] md:leading-[20px] md:leading-[32px] -tracking-[.04em] mt-[120px] md:mt-[150px] mb-[10px] md:mb-[30px]">Что будет на эфире?</p>
            <h1 className="font-[700] text-[56px] md:text-[90px] leading-[50.4px] md:leading-[72px] -tracking-[3px] md:-tracking-[.04em] mb-[30px] max-w-[300px] md:max-w-full">
                Создадим дизайн продукта <span className="no-wrap">в реальном</span> времени, вместе <span className="no-wrap">с вами</span>
            </h1>

            <p className="font-[500] text-[20px] md:text-[32px] leading-[20px] md:leading-[32px] -tracking-[.04em] max-w-[220px] md:max-w-full">
                ...и докажем, что это может
                <span className="ml-1 relative inline-block">
                    сделать каждый
                    <img src={CustomUnderline} className="absolute bottom-0 top-6 md:top-8 left-0 w-full scale-[110%] md:scale-[100%] h-auto" alt="Custom Underline" />
                </span>
            </p>
        </div>
    );
};

export default RealtimeDesignBanner;