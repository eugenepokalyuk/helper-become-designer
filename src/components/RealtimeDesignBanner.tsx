import React from 'react';
import CustomUnderline from '../assets/underline.png';
const RealtimeDesignBanner: React.FC = () => {
    return (
        <div>
            <p className="font-[500] text-[32px] leading-[32px] -tracking-[.04em] mt-[150px] mb-[30px]">Что будет на эфире?</p>
            <h1 className="font-[700] text-[90px] leading-[72px] -tracking-[.04em] mb-[30px]">Создадим дизайн продукта в реальном времени, вместе с вами</h1>
            <p className="font-[500] text-[32px] leading-[32px] -tracking-[.04em]">...и докажем, что это может <span className="relative inline-block">сделать каждый<img src={CustomUnderline} className="absolute bottom-0 top-8 left-0 w-full h-auto scale-[110%]" alt="Custom Underline" /></span></p>
        </div>
    );
};

export default RealtimeDesignBanner;
