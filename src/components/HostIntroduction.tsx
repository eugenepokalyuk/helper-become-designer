import React from 'react';
import hostImage from '../assets/images/max.webp';

const HostIntroduction: React.FC = () => {
    return (
        <div className="my-10 md:my-20 mt-20 md:my-[80px]">
            <div className="md:grid md:grid-cols-2 md:items-center">
                <div>
                    <h1 className="font-[700] text-[28px] md:text-[38px] leading-[29.4px] md:leading-[34.2px] -tracking-[0.04em] text-black md:text-nowrap">
                        Эфир проведёт <span className='no-wrap'>Макс Авдеев</span>
                    </h1>
                    <p className="font-[700] text-[28px] md:text-[38px] leading-[29.4px] md:leading-[34.2px] -tracking-[0.04em] text-black/20 max-w-[310px]">
                        <span className='md:text-nowrap'>основатель<br /><span className='no-wrap'>студии MAX</span></span> <span className='no-wrap'>и образовательного</span> продукта Helper
                    </p>
                    <p className="max-md:hidden font-[400] text-[16px] leading-[17.6px] text-[#878787] mt-4 max-w-[381px]">
                        Нанял более 180 дизайнеров крупнейшим компаниям и более 100 человек в студию MAX. Может нарисовать любой дизайн за полчаса и не понимает почему так не могут все! :))
                    </p>
                    <p className="md:hidden font-[400] text-[16px] leading-[17.6px] text-[#878787] mt-4">Нанял  более 180 дизайнеров в инхаус крупнейших компаний и более 100 человек в студию MAX </p>
                </div>
                <div className="md:flex md:justify-center mt-[28px] md:mt-0">
                    <img src={hostImage} alt="Макс Авдеев" className="max-w-xs md:max-w-sm lg:max-w-md mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default HostIntroduction;